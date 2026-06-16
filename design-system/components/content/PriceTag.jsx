import React from 'react';

/**
 * Price display in the flyer style: struck regular price → discounted price,
 * with a (税込) note. The "now" price can be emphasised in petal rouge.
 */
export function PriceTag({
  duration = null,
  regular = null,
  now,
  note = '税込',
  emphasis = 'plum',
  size = 'md',
  ...rest
}) {
  const sizes = {
    sm: { now: '18px', reg: '13px', meta: '12px' },
    md: { now: '24px', reg: '15px', meta: '13px' },
    lg: { now: '32px', reg: '17px', meta: '14px' },
  };
  const s = sizes[size];
  const nowColor = emphasis === 'accent' ? 'var(--petal-accessible)' : 'var(--plum)';

  return (
    <div
      className="n-price"
      style={{ display: 'flex', alignItems: 'baseline', gap: '10px', flexWrap: 'wrap', fontFamily: 'var(--font-serif-jp)', ...rest.style }}
      {...rest}
    >
      {duration && (
        <span style={{ fontFamily: 'var(--font-body)', fontSize: s.meta, color: 'var(--text-muted)', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>{duration}</span>
      )}
      {regular && (
        <span style={{ fontSize: s.reg, color: 'var(--price-strike)', textDecoration: 'line-through', fontWeight: 'var(--fw-regular)', whiteSpace: 'nowrap' }}>{regular}</span>
      )}
      {regular && <span style={{ color: 'var(--text-muted)', fontSize: s.reg }}>→</span>}
      <span style={{ fontSize: s.now, color: nowColor, fontWeight: 'var(--fw-bold)', lineHeight: 1, whiteSpace: 'nowrap' }}>{now}</span>
      {note && (
        <span style={{ fontFamily: 'var(--font-body)', fontSize: s.meta, color: 'var(--text-muted)' }}>（{note}）</span>
      )}
    </div>
  );
}
