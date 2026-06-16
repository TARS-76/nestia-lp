import { SectionHeader } from '@/design-system/components/content/SectionHeader'

export function Problem() {
  const items = [
    '肩や首の重さが抜けない',
    '眠りが浅い / 頭が休まらない',
    '顔のむくみや疲れ感が気になる',
    'マッサージもフェイシャルも一度に受けたい',
    '仕事帰りに通えるサロンを探している',
    '初めてでも安心して相談したい',
  ]
  return (
    <section className="problem">
      <div className="problem__inner">
        <SectionHeader eyebrow="for you" title="こんな方へ" align="left" />
        <ul className="problem__list">
          {items.map((item, i) => (
            <li key={i} className="problem__item">{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
