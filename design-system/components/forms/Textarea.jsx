import React from 'react';

/**
 * Multiline text area — same field styling as Input. For requests / notes.
 */
export function Textarea({ label = null, hint = null, error = null, id, rows = 4, ...rest }) {
  const inputId = id || (label ? `n-textarea-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
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
      <textarea
        id={inputId}
        rows={rows}
        className="n-textarea"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--fs-body)',
          lineHeight: 'var(--lh-normal)',
          color: 'var(--ink)',
          background: 'var(--surface-soft)',
          border: `1px solid ${borderColor}`,
          borderRadius: 'var(--r-md)',
          padding: '13px 16px',
          outline: 'none',
          width: '100%',
          resize: 'vertical',
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
