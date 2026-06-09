export function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        {/* __HERO_IMAGE__ */}
        <p className="hero__eyebrow">nestia.</p>
        <h1 className="hero__title">
          なんでもない日に、<br />帰ってこられる場所。
        </h1>
        <p className="hero__sub">
          立川駅近くのプライベートリラクゼーションサロン nestia.<br />
          肩こり、疲れ、眠りの浅さ、なんとなくの不調に。<br />
          その日の身体と気分に合わせたオーダーメイドケア。
        </p>
        <div className="hero__cta">
          <a href="__HPB_RESERVE_URL__" className="btn-primary">
            空き状況を見る
          </a>
          <a href="__LINE_URL__" className="btn-secondary">
            LINEで相談する
          </a>
        </div>
      </div>
    </section>
  )
}
