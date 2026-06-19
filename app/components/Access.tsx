import Image from 'next/image'
import { SectionHeader } from '@/design-system/components/content/SectionHeader'

export function Access() {
  return (
    <section className="access">
      <div className="access__inner">
        <SectionHeader eyebrow="access" title="アクセス" align="left" />
        <div className="access__photo">
          <Image
            src="/images/nestia.room.png"
            alt="nestia. 店内"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>
        <div className="access__info">
          <p>東京都立川市柴崎町3-8-10 collabo 2F</p>
          <p>立川南駅 徒歩1分 / 立川駅南口 徒歩3分</p>
          <p>営業時間 10:00〜22:00（最終受付 21:00）</p>
          <p>完全予約制</p>
        </div>
        <div className="access__map">
          {/* Googleマップ埋め込み — Phase 5で追加 */}
          <div className="access__map-placeholder" />
        </div>
      </div>
    </section>
  )
}
