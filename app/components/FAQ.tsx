import { SectionHeader } from '@/design-system/components/content/SectionHeader'
import { Button } from '@/design-system/components/core/Button'
import { CTA as ctaConfig } from '@/lib/cta-config'

const faqs = [
  {
    q: '予約方法を教えてください。',
    a: 'LINEから承っています。当日・直前のご予約もお気軽にどうぞ。（夜20時以降も受付OK・最終受付21:00）',
  },
  {
    q: '初めてでも安心ですか？',
    a: 'はい。施術前に丁寧なカウンセリングを行います。お悩みや力加減のご希望をお聞きし、その日の身体に合わせた内容を一緒に決めていきます。',
  },
  {
    q: '男性でも利用できますか？',
    a: 'もちろんです。男性のお客様にも多くご来店いただいています。おひとりでも安心してお越しください。',
  },
  {
    q: '施術時間はどのくらいですか？',
    a: 'メニューによって50〜110分です。はじめての方はオーダーメイドケア90分（¥10,800）が人気です。',
  },
  {
    q: '駐車場はありますか？',
    a: '店舗の駐車場はありませんが、近隣にパーキングがあります。立川南駅から徒歩1分のため、電車でのご来店が便利です。',
  },
  {
    q: '支払い方法を教えてください。',
    a: '現金・PayPay・クレジットカード（Visa/Mastercard/JCB/AMEX/Diners）がご利用いただけます。',
  },
  {
    q: '回数券はありますか？',
    a: 'はい、回数券をご用意しています。継続してお身体のケアをされたい方におすすめです。',
  },
] as const

export function FAQ() {
  return (
    <section className="n-faq">
      <style>{`
        .n-faq__inner {
          max-width: var(--container-max);
          margin: 0 auto;
          padding: var(--section-py) var(--container-px);
        }
        .n-faq__list {
          display: flex;
          flex-direction: column;
        }
        .n-faq__item {
          border-bottom: 1px solid var(--line);
          padding: var(--sp-4) 0;
        }
        .n-faq__q {
          font-family: var(--font-serif-jp);
          font-size: var(--fs-body);
          color: var(--text-strong);
          cursor: pointer;
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--sp-4);
        }
        .n-faq__q::-webkit-details-marker {
          display: none;
        }
        .n-faq__q::after {
          content: '+';
          flex-shrink: 0;
          font-family: var(--font-display);
          font-size: var(--fs-h4);
          color: var(--accent-text);
          transition: transform var(--dur) var(--ease);
        }
        .n-faq__item[open] .n-faq__q::after {
          transform: rotate(45deg);
        }
        .n-faq__a {
          margin: var(--sp-3) 0 0;
          font-family: var(--font-body);
          font-size: var(--fs-sm);
          line-height: var(--lh-relaxed);
          color: var(--text-body);
          white-space: pre-line;
        }
        .n-faq__cta {
          margin-top: var(--sp-8);
          text-align: center;
        }
        .n-faq__cta-text {
          font-family: var(--font-serif-jp);
          font-size: var(--fs-body);
          color: var(--text-body);
          margin: 0 0 var(--sp-4);
        }
      `}</style>
      <div className="n-faq__inner">
        <SectionHeader eyebrow="faq" title="よくあるご質問" align="left" />
        <div className="n-faq__list">
          {faqs.map((item, i) => (
            <details key={item.q} className="n-faq__item">
              <summary className="n-faq__q">{`Q${i + 1}. ${item.q}`}</summary>
              <p className="n-faq__a">{item.a}</p>
            </details>
          ))}
        </div>
        <div className="n-faq__cta">
          <p className="n-faq__cta-text">その他のご質問はLINEへ</p>
          <Button as="a" href={ctaConfig.primary.href} variant="primary">
            LINEで相談する
          </Button>
        </div>
      </div>
    </section>
  )
}
