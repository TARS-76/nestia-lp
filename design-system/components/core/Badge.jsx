import React from 'react';

/**
 * Small status / category label. Soft almond by default,
 * plum for the menu-name pills seen on the flyer, accent (accessible pink) for urgency.
 */
export function Badge({ children, variant = 'soft', size = 'md', ...rest }) {
  const sizes = {
    sm: { padding: '3px 10px', fontSize: '11px' },
    md: { padding: '5px 14px', fontSize: '12px' },
    lg: { padding: '7px 18px', fontSize: '13px' },
  };

  const variants = {
    soft: { background: 'var(--almond-200)', color: 'var(--plum-700)' },
    plum: { background: 'var(--plum)', color: 'var(--cream)' },
    outline: { background: 'transparent', color: 'var(--plum)', boxShadow: 'inset 0 0 0 1px var(--rose)' },
    accent: { background: 'var(--petal-soft)', color: 'var(--petal-accessible-700)', boxShadow: 'inset 0 0 0 1px var(--petal-accessible)' },
  };

  return (
    <span
      className={`n-badge n-badge--${variant}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--fw-medium)',
        letterSpacing: '0.08em',
        borderRadius: 'var(--r-pill)',
        lineHeight: 1.3,
        whiteSpace: 'nowrap',
        ...sizes[size],
        ...variants[variant],
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
