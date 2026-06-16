import React from 'react';

/**
 * Text input with floating-feel label. Soft cream field, almond border,
 * petal focus ring. Use for booking / contact forms.
 */
export function Input({ label = null, hint = null, error = null, id, type = 'text', ...rest }) {
  const inputId = id || (label ? `n-input-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const borderColor = error ? 'var(--petal-deep)' : 'var(--border-strong)';

  return (
    <div className="n-field" style={{ display: 'flex', flexDirection: 'column', gap: '7px', width: '100%' }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--fs-sm)',
            fontWeight: 'var(--fw-medium)',
            color: 'var(--text-strong)',
            letterSpacing: '0.04em',
          }}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        className="n-input"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--fs-body)',
          color: 'var(--ink)',
          background: 'var(--surface-soft)',
          border: `1px solid ${borderColor}`,
          borderRadius: 'var(--r-md)',
          padding: '13px 16px',
          outline: 'none',
          width: '100%',
          transition: 'border-color var(--dur) var(--ease), box-shadow var(--dur) var(--ease), background var(--dur) var(--ease)',
        }}
        onFocus={(e) => {
          e.target.style.borderColor = 'var(--accent)';
          e.target.style.boxShadow = 'var(--shadow-focus)';
          e.target.style.background = 'var(--white)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = borderColor;
          e.target.style.boxShadow = 'none';
          e.target.style.background = 'var(--surface-soft)';
        }}
        {...rest}
      />
      {(hint || error) && (
        <span style={{ fontSize: 'var(--fs-xs)', color: error ? 'var(--petal-deep)' : 'var(--text-muted)', letterSpacing: '0.03em' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
