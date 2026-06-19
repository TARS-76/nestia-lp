import Image from 'next/image'
import { SectionHeader } from '@/design-system/components/content/SectionHeader'
import { Badge } from '@/design-system/components/core/Badge'

export function Staff() {
  return (
    <section className="n-staff">
      <style>{`
        .n-staff__inner {
          max-width: var(--container-max);
          margin: 0 auto;
          padding: var(--section-py) var(--container-px);
        }
        .n-staff__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--sp-6);
        }
        .n-staff__photo {
          position: relative;
          width: 100%;
          aspect-ratio: 760 / 920;
          border-radius: var(--r-lg);
          overflow: hidden;
          background: linear-gradient(135deg, var(--almond-200), var(--dust));
        }
        .n-staff__photo img {
          object-fit: cover;
        }
        .n-staff__name {
          font-family: var(--font-serif-jp);
          font-size: var(--fs-h3);
          font-weight: var(--fw-semibold);
          color: var(--text-strong);
          margin: 0 0 var(--sp-4);
        }
        .n-staff__kana {
          font-size: var(--fs-sm);
          font-weight: var(--fw-regular);
          color: var(--text-muted);
        }
        .n-staff__body p {
          font-family: var(--font-serif-jp);
          font-size: var(--fs-body);
          line-height: var(--lh-relaxed);
          color: var(--text-body);
          margin: 0 0 var(--sp-4);
        }
        .n-staff__signal {
          margin-top: var(--sp-2);
        }
        @media (min-width: 768px) {
          .n-staff__grid {
            grid-template-columns: 1fr 1.4fr;
            align-items: start;
          }
        }
      `}</style>
      <div className="n-staff__inner">
        <SectionHeader eyebrow="staff" title="プロフィール" align="left" />
        <div className="n-staff__grid">
          <div className="n-staff__photo">
            <Image
              src="/images/nestia.profile.png"
              alt="川本 美乃梨"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
          <div className="n-staff__body">
            <h3 className="n-staff__name">
              川本 美乃梨 <span className="n-staff__kana">（かわもと みのり）</span>
            </h3>
            <p>施術歴7年。2026年4月、立川に独立開業。</p>
            <p>
              「また来たいと思っていただける施術を届けたい」
              <br />
              その想いが nestia. を作った。
            </p>
            <p>
              その日の身体の状態を丁寧に読み取り、
              <br />
              一人ひとりに合わせた施術を。
              <br />
              帰るたびに「ここに来てよかった」と思える場所へ。
            </p>
            <div className="n-staff__signal">
              <Badge variant="outline" size="sm">
                アジアマッサージ選手権2026 オイル部門 出場
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
