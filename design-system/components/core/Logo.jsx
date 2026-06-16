import React from 'react';

/**
 * The nestia. wordmark lockup. Cormorant Garamond with the petal period.
 * `tone` controls light/dark; `showTagline` toggles "relaxation salon".
 */
export function Logo({ tone = 'plum', size = 40, showTagline = true, ...rest }) {
  const colors = {
    plum: { mark: 'var(--plum)', tag: 'var(--rose)' },
    cream: { mark: 'var(--cream)', tag: 'var(--almond)' },
    ink: { mark: 'var(--ink)', tag: 'var(--text-muted)' },
  };
  const c = colors[tone] || colors.plum;

  return (
    <span
      className="n-logo"
      style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: 1, ...rest.style }}
      {...rest}
    >
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 'var(--fw-medium)',
          fontSize: `${size}px`,
          letterSpacing: 'var(--ls-wordmark)',
          color: c.mark,
        }}
      >
        nestia<span style={{ color: 'var(--accent)' }}>.</span>
      </span>
      {showTagline && (
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 'var(--fw-regular)',
            fontSize: `${Math.round(size * 0.33)}px`,
            letterSpacing: '0.08em',
            color: c.tag,
            marginTop: `${Math.round(size * 0.06)}px`,
            whiteSpace: 'nowrap',
          }}
        >
          relaxation salon
        </span>
      )}
    </span>
  );
}
