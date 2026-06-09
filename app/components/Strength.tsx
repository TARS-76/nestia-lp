export function Strength() {
  const items = [
    { num: '01', text: 'その日の身体に合わせるオーダーメイド施術' },
    { num: '02', text: 'アロマ・リンパ・ヘッド・フェイシャルまで一度に相談できる' },
    { num: '03', text: '仕事帰りにも通いやすい立川駅近くのサロン' },
    { num: '04', text: '1人サロンならではの落ち着いた時間' },
    { num: '05', text: '学び続ける施術者' }, // [本人確認後] Asia Massage Championship 2026
  ]
  return (
    <section className="strength">
      <div className="strength__inner">
        <span className="eyebrow">why nestia.</span>
        <h2 className="section-title">選ばれる理由</h2>
        <ol className="strength__list">
          {items.map((item) => (
            <li key={item.num} className="strength__item">
              <span className="strength__num">{item.num}</span>
              <span className="strength__text">{item.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
