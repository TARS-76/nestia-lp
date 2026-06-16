import React from 'react';
import { Eyebrow } from '../core/Eyebrow.jsx';

/**
 * Centered section header: optional eyebrow, a display/JP title, optional
 * lead line, and a tiny petal divider. The brand's standard section opener.
 */
export function SectionHeader({
  eyebrow = null,
  title,
  lead = null,
  align = 'center',
  titleFont = 'serif-jp',
  divider = true,
  tone = 'light',
  ...rest
}) {
  const titleFamily = titleFont === 'display' ? 'var(--font-display)' : 'var(--font-serif-jp)';
  const isDark = tone === 'dark';

  return (
    <header
      className="n-section-header"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align,
        gap: '14px',
        ...rest.style,
      }}
      {...rest}
    >
      {eyebrow && <Eyebrow dot tone={isDark ? 'cream' : 'muted'}>{eyebrow}</Eyebrow>}
      <h2
        style={{
          fontFamily: titleFamily,
          fontWeight: 'var(--fw-semibold)',
          fontSize: 'var(--fs-h2)',
          lineHeight: 'var(--lh-snug)',
          letterSpacing: titleFont === 'display' ? 'var(--ls-display)' : 'var(--ls-jp)',
          color: isDark ? 'var(--cream)' : 'var(--text-strong)',
          margin: 0,
        }}
      >
        {title}
      </h2>
      {divider && (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: 28, height: 1, background: isDark ? 'var(--taupe)' : 'var(--border-strong)' }} />
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
          <span style={{ width: 28, height: 1, background: isDark ? 'var(--taupe)' : 'var(--border-strong)' }} />
        </span>
      )}
      {lead && (
        <p
          className="n-jp-serif"
          style={{
            fontFamily: 'var(--font-serif-jp)',
            fontSize: 'var(--fs-lead)',
            lineHeight: 'var(--lh-relaxed)',
            color: isDark ? 'var(--text-on-dark-muted)' : 'var(--text-body)',
            maxWidth: '46ch',
            margin: 0,
          }}
        >
          {lead}
        </p>
      )}
    </header>
  );
}
