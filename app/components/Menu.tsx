import { SectionHeader } from '@/design-system/components/content/SectionHeader'
import { MenuCard } from '@/design-system/components/content/MenuCard'
import { Button } from '@/design-system/components/core/Button'
import { CTA as ctaConfig } from '@/lib/cta-config'

const items = [
  {
    name: 'オーダーメイドケア',
    duration: '90分',
    regular: '¥12,800',
    now: '¥10,800',
    description:
      'カウンセリングで「今日、一番つらいところ」を確認。時間配分・施術部位・力加減をあなたに合わせて組み立てます。首・肩・腰・脚……気になる部位を重点的に。回数券あり（継続ケアにおすすめ）。',
  },
  {
    name: '毛穴洗浄 × 水光フェイシャル',
    duration: '60分',
    regular: '¥9,400',
    now: '¥7,800',
    description:
      'クレンジング・洗顔後、スチームと泥パックで毛穴の皮脂汚れを吸着洗浄。顔・デコルテのマッサージ＋選べるエモリエントパックで潤い補給。透明感・ツヤ肌へ。',
  },
  {
    name: 'ドライヘッドスパ × ボディケア',
    duration: '90分',
    regular: null,
    now: '¥9,900〜',
    description:
      '脳疲労・眼精疲労・睡眠の質が気になる方へ。頭皮を化粧水で保湿しながらほぐし、血行促進。耳周り・首・肩・デコルテまでケア。マイクロスコープで頭皮状態の確認も可能。',
  },
] as const

export function Menu() {
  return (
    <section className="n-menu">
      <style>{`
        .n-menu__inner {
          max-width: var(--container-max);
          margin: 0 auto;
          padding: var(--section-py) var(--container-px);
        }
        .n-menu__list {
          display: flex;
          flex-direction: column;
          gap: var(--sp-6);
        }
        .n-menu__line {
          margin-top: var(--sp-8);
          padding: var(--sp-6);
          border-radius: var(--r-lg);
          background: var(--surface-soft);
          text-align: center;
        }
        .n-menu__line-text {
          font-family: var(--font-serif-jp);
          font-size: var(--fs-body);
          line-height: var(--lh-relaxed);
          color: var(--text-body);
          margin: 0 0 var(--sp-2);
        }
        .n-menu__line-sub {
          font-family: var(--font-body);
          font-size: var(--fs-sm);
          color: var(--text-muted);
          margin: 0 0 var(--sp-5);
        }
      `}</style>
      <div className="n-menu__inner">
        <SectionHeader eyebrow="menu" title="メニュー" align="left" />
        <div className="n-menu__list">
          {items.map((item) => (
            <MenuCard key={item.name} {...item} emphasis="accent" />
          ))}
        </div>
        <div className="n-menu__line">
          <p className="n-menu__line-text">メニューに迷ったら、LINEからお気軽にご相談ください。</p>
          <p className="n-menu__line-sub">友だち追加で500円OFF</p>
          <Button as="a" href={ctaConfig.primary.href} variant="primary">
            LINEで相談する
          </Button>
        </div>
      </div>
    </section>
  )
}
