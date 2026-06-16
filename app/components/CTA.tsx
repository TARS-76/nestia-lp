import { CTA as ctaConfig } from '@/lib/cta-config'

export function CTA() {
  return (
    <section className="cta">
      <div className="cta__inner">
        <a href={ctaConfig.primary.href} className="btn-primary btn-primary--large">
          {ctaConfig.primary.label}
        </a>
        <a href={ctaConfig.secondary.href} className="btn-secondary">
          {ctaConfig.secondary.label}
        </a>
        {ctaConfig.tel.published && (
          <a href={ctaConfig.tel.href} className="btn-tel">
            {ctaConfig.tel.label}
          </a>
        )}
      </div>
    </section>
  )
}
