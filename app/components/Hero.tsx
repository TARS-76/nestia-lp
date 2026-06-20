import Image from 'next/image'
import { CTA as ctaConfig } from '@/lib/cta-config'
import { Button } from '@/design-system/components/core/Button'
import { NestiaLogo } from '@/components/hero/NestiaLogo'
import NestiaHandwritingLogo from '@/components/NestiaHandwritingLogo'

// Temporary switch while verifying the inline-SVG logo migration (see nestia-handwriting-logo-implementation.md, step 9).
// Set to false to roll back to the fetch/DOMParser-based logo.
const USE_NEW_LOGO = true

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        {/* __HERO_IMAGE__ */}
        <Image
          src="/images/butterfly.svg"
          alt=""
          aria-hidden="true"
          width={900}
          height={450}
          className="hero__butterfly"
        />
        {USE_NEW_LOGO ? (
          <NestiaLogo className="hero__logo" style={{ width: '132px' }} />
        ) : (
          <NestiaHandwritingLogo className="hero__logo" style={{ width: '132px' }} />
        )}
        <h1 className="hero__title">
          なんでもない日に、<br />帰ってこられる場所。
        </h1>
        <p className="hero__sub">
          立川駅近くのプライベートリラクゼーションサロン nestia.<br />
          肩こり、疲れ、眠りの浅さ、なんとなくの不調に。<br />
          その日の身体と気分に合わせたオーダーメイドケア。
        </p>
        <div className="hero__cta">
          <Button as="a" href={ctaConfig.primary.href} variant="primary">
            {ctaConfig.primary.label}
          </Button>
          <Button as="a" href={ctaConfig.secondary.href} variant="outline">
            {ctaConfig.secondary.label}
          </Button>
        </div>
      </div>
    </section>
  )
}
