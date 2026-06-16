import React from 'react';

/**
 * Wide-tracked, uppercase micro-label — the signature nestia. Latin device.
 * Optionally prefixed with a small petal dot.
 */
export function Eyebrow({ children, dot = false, tone = 'muted', ...rest }) {
  const colors = {
    muted: 'var(--text-muted)',
    plum: 'var(--plum)',
    cream: 'var(--text-on-dark-muted)',
  };
  return (
    <span
      className="n-eyebrow"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-xs)',
        fontWeight: 'var(--fw-medium)',
        letterSpacing: 'var(--ls-label)',
        textTransform: 'uppercase',
        color: colors[tone] || colors.muted,
        ...rest.style,
      }}
      {...rest}
    >
      {dot && (
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', flex: '0 0 auto' }} />
      )}
      {children}
    </span>
  );
}
