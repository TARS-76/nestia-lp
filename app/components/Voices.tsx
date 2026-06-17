import { SectionHeader } from '@/design-system/components/content/SectionHeader'

const voices = [
  {
    name: 'スネコさん（女性・50代）',
    text: '施術中、何度も「ゴッドハンド」という言葉が浮かんできました。施術後は徐々に身体の状態が回復しているのを感じ、2日後の今日は気持ちも前向きになるくらい調子が良いです。',
  },
  {
    name: 'みずきさん（女性・30代）',
    text: 'フェイシャルから全身マッサージまで1回で全部できる場所をずっと探していました。カウンセリングで時間配分や好みの強さを決められる完全オーダーメイド。悩みの巻き肩もよくなりました。オプションの石膏パックを追加したところ、翌朝も肌がピカピカで感動！',
  },
  {
    name: 'あおさん（男性・40代）',
    text: '腰に痛みを感じていたため、今回は肩や首まわりだけでなく腰も入念にケアしていただきました。その日の体の状態に合わせて施術内容を選べるのが、オーダーメイドコースの魅力だと思います。',
  },
  {
    name: 'りりのえさん（女性・50代）',
    text: 'リンパを流す施術では、身体の細部まで丁寧にほぐしていただき、疲労が流れていくような感覚でした。次回は疲れが溜まってから行くのではなく、計画的にお願いしようと思います。',
  },
  {
    name: 'ゆうちゃんさん（男性・20代）',
    text: '技術はもちろん、いつも丁寧で気さくに対応してくださるので、男性一人でも安心して通える場所だと思います！',
  },
  {
    name: 'ナネットさん（男性・40代）',
    text: '手技の技術が滅茶苦茶高く、施術中のホスピタリティも行き届いていてこれで8,500円は格安だと感じました。即決で回数券を購入しました。いろんな人に広くおすすめできるサロンです。',
  },
] as const

export function Voices() {
  return (
    <section className="n-voices">
      <style>{`
        .n-voices__inner {
          max-width: var(--container-max);
          margin: 0 auto;
          padding: var(--section-py) var(--container-px);
        }
        .n-voices__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--sp-5);
        }
        .n-voices__card {
          display: flex;
          flex-direction: column;
          gap: var(--sp-3);
          background: var(--surface-card);
          border: 1px solid var(--line-soft);
          border-radius: var(--r-lg);
          padding: var(--sp-5);
          box-shadow: var(--shadow-sm);
        }
        .n-voices__text {
          font-family: var(--font-body);
          font-size: var(--fs-sm);
          line-height: var(--lh-relaxed);
          color: var(--text-body);
          margin: 0;
        }
        .n-voices__name {
          font-family: var(--font-body);
          font-size: var(--fs-xs);
          color: var(--text-muted);
          letter-spacing: var(--ls-label);
          margin: 0;
        }
        .n-voices__note {
          margin: var(--sp-5) 0 0;
          font-size: var(--fs-xs);
          color: var(--text-muted);
          text-align: right;
        }
        @media (min-width: 768px) {
          .n-voices__grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
      <div className="n-voices__inner">
        <SectionHeader eyebrow="voices" title="お客様の声" align="left" />
        <div className="n-voices__grid">
          {voices.map((voice) => (
            <article key={voice.name} className="n-voices__card">
              <p className="n-voices__text">{voice.text}</p>
              <p className="n-voices__name">{voice.name}</p>
            </article>
          ))}
        </div>
        <p className="n-voices__note">※個人の感想です</p>
      </div>
    </section>
  )
}
