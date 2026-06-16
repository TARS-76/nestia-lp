import React from 'react';

/**
 * nestia. primary action button.
 * Primary = Petal Rouge fill + white text. Accent = petal knockout (white fill,
 * petal text + border) for emphasis. Outline/ghost = plum for secondary.
 * Pill-shaped, generous padding, calm hover.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  as = 'button',
  ...rest
}) {
  const sizes = {
    sm: { padding: '9px 18px', fontSize: '13px' },
    md: { padding: '13px 28px', fontSize: '14px' },
    lg: { padding: '17px 38px', fontSize: '15px' },
  };

  const variants = {
    primary: {
      background: 'var(--cta-bg)',
      color: 'var(--cta-text)',
      border: '1px solid transparent',
    },
    accent: {
      background: 'var(--white)',
      color: 'var(--accent-text)',
      border: '1px solid var(--accent-text)',
    },
    outline: {
      background: 'var(--white)',
      color: 'var(--plum)',
      border: '1px solid var(--plum)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--plum)',
      border: '1px solid transparent',
    },
  };

  // Disabled / 満席 — low-saturation taupe, kept legible (no opacity wash)
  const disabledStyle = {
    background: 'var(--dust)',
    color: 'var(--ink-soft)',
    border: '1px solid transparent',
  };

  const style = {
    display: block ? 'flex' : 'inline-flex',
    width: block ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-medium)',
    letterSpacing: '0.04em',
    borderRadius: 'var(--r-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: 1,
    transition: 'background var(--dur) var(--ease), color var(--dur) var(--ease), transform var(--dur-fast) var(--ease), box-shadow var(--dur) var(--ease)',
    lineHeight: 1.2,
    textDecoration: 'none',
    ...sizes[size],
    ...(disabled ? disabledStyle : variants[variant]),
  };

  const Tag = as;
  return (
    <Tag
      className={`n-btn n-btn--${variant}`}
      style={style}
      disabled={as === 'button' ? disabled : undefined}
      {...rest}
    >
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </Tag>
  );
}
