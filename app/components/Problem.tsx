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
        <span className="eyebrow">for you</span>
        <h2 className="section-title">こんな方へ</h2>
        <ul className="problem__list">
          {items.map((item, i) => (
            <li key={i} className="problem__item">{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
