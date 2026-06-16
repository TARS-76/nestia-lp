import { CTA as ctaConfig } from '@/lib/cta-config'
import { Button } from '@/design-system/components/core/Button'

export function CTA() {
  return (
    <section className="cta">
      <div className="cta__inner">
        <Button as="a" href={ctaConfig.primary.href} variant="primary" size="lg">
          {ctaConfig.primary.label}
        </Button>
        <Button as="a" href={ctaConfig.secondary.href} variant="outline">
          {ctaConfig.secondary.label}
        </Button>
        {ctaConfig.tel.published && (
          <Button as="a" href={ctaConfig.tel.href} variant="ghost">
            {ctaConfig.tel.label}
          </Button>
        )}
      </div>
    </section>
  )
}
