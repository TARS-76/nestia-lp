import React from 'react';
import { Badge } from '../core/Badge.jsx';
import { PriceTag } from './PriceTag.jsx';

/**
 * The signature nestia. menu item card — a rounded photo on the left, a plum
 * name pill, the discounted price, and a description. Mirrors the flyer layout.
 * `image` is any node (an <img>, an image-slot, or left blank for a placeholder).
 */
export function MenuCard({
  name,
  duration = null,
  regular = null,
  now,
  description,
  image = null,
  rank = null,
  emphasis = 'plum',
  ...rest
}) {
  return (
    <article
      className="n-menu-card"
      style={{
        display: 'grid',
        gridTemplateColumns: '136px 1fr',
        gap: '22px',
        alignItems: 'start',
        background: 'var(--surface-card)',
        border: '1px solid var(--line-soft)',
        borderRadius: 'var(--r-lg)',
        padding: '20px',
        boxShadow: 'var(--shadow-sm)',
        ...rest.style,
      }}
      {...rest}
    >
      <div
        style={{
          position: 'relative',
          width: 136,
          height: 136,
          borderRadius: 'var(--r-md)',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, var(--almond-200), var(--dust))',
          flex: '0 0 auto',
        }}
      >
        {image}
        {rank && (
          <span
            style={{
              position: 'absolute',
              top: 10,
              left: 10,
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '13px',
              letterSpacing: '0.04em',
              color: 'var(--cream)',
              background: 'rgba(119,82,78,0.78)',
              padding: '2px 10px',
              borderRadius: 'var(--r-pill)',
              backdropFilter: 'blur(2px)',
            }}
          >
            {rank}
          </span>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: 0 }}>
        <div>
          <Badge variant="plum" size="md">{name}</Badge>
        </div>
        <PriceTag duration={duration} regular={regular} now={now} emphasis={emphasis} size="md" />
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--fs-sm)',
            lineHeight: 'var(--lh-normal)',
            color: 'var(--text-body)',
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>
    </article>
  );
}
