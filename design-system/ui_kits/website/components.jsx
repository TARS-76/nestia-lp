/* nestia. — Marketing website UI kit
   All screens read primitives from window.NestiaDesignSystem_9e0aed and React from
   the global. No ES imports (in-browser Babel). Components export to window. */

const { useState } = React;
const DS = window.NestiaDesignSystem_9e0aed;
const { Logo, Button, Badge, Eyebrow, SectionHeader, MenuCard, PriceTag, Input, Textarea } = DS;

/* Soft photo placeholder — real salon photography drops in here. */
function Photo({ label = '', radius = 'var(--r-md)', ratio = null, style = {} }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        ...(ratio ? { aspectRatio: ratio } : { height: '100%' }),
        borderRadius: radius,
        overflow: 'hidden',
        background: 'linear-gradient(135deg, var(--almond-200) 0%, var(--dust) 55%, var(--taupe) 120%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    >
      <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(119,82,78,0.5)' }}>{label || 'photo'}</span>
    </div>
  );
}

/* ---------------------------------------------------------------- Header */
function Header({ onBook }) {
  const items = [
    ['concept', 'コンセプト'],
    ['menu', 'メニュー'],
    ['access', 'アクセス'],
  ];
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '18px 40px',
        background: 'color-mix(in oklch, var(--cream) 86%, transparent)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--line-soft)',
      }}
    >
      <Logo size={28} showTagline={false} />
      <nav style={{ display: 'flex', alignItems: 'center', gap: '34px' }}>
        {items.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            style={{ fontFamily: 'var(--font-body)', fontSize: 13, letterSpacing: '0.1em', color: 'var(--ink-soft)' }}
          >
            {label}
          </a>
        ))}
        <Button size="sm" onClick={onBook}>ご予約</Button>
      </nav>
    </header>
  );
}

/* ------------------------------------------------------------------ Hero */
function Hero({ onBook }) {
  return (
    <section
      style={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1.05fr 0.95fr',
        gap: '48px',
        alignItems: 'center',
        padding: '88px 40px 96px',
        maxWidth: 'var(--container)',
        margin: '0 auto',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Eyebrow dot>Tachikawa · Relaxation Salon</Eyebrow>
        <h1
          style={{
            fontFamily: 'var(--font-serif-jp)',
            fontWeight: 600,
            fontSize: 'clamp(34px, 4vw, 52px)',
            lineHeight: 1.32,
            letterSpacing: '0.04em',
            color: 'var(--plum)',
          }}
        >
          その日のあなたに<br />合わせた、<br />オーダーメイドケア。
        </h1>
        <p style={{ fontFamily: 'var(--font-serif-jp)', fontSize: 18, lineHeight: 1.95, color: 'var(--ink-soft)', maxWidth: '40ch' }}>
          日々がんばるあなたへ。今日の心と体に寄り添う、やさしいひとときを。立川駅から徒歩3分のプライベートサロンです。
        </p>
        <div style={{ display: 'flex', gap: '14px', marginTop: '6px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="lg" onClick={onBook}>ご予約はこちら</Button>
          <Button size="lg" variant="outline" as="a" href="#menu">メニューを見る</Button>
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <Photo ratio="4 / 5" radius="var(--r-xl)" style={{ boxShadow: 'var(--shadow-lg)' }} label="hero portrait" />
        <div
          style={{
            position: 'absolute',
            bottom: -22,
            left: -22,
            background: 'var(--white)',
            borderRadius: 'var(--r-lg)',
            padding: '14px 20px',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)' }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--plum)', fontWeight: 500 }}>本日空きあり · 当日予約OK</span>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Concept */
function Concept() {
  const cols = [
    ['01', 'カウンセリング', 'その日の心と体の状態をていねいに伺います。'],
    ['02', 'オーダーメイド', 'アロマ・ボディ・ヘッド・リフレを自由に組み合わせ。'],
    ['03', '整える', '深いリラックスへ。慢性的な疲れをやわらげます。'],
  ];
  return (
    <section id="concept" style={{ background: 'var(--surface-soft)', padding: '88px 40px' }}>
      <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto 56px' }}>
        <SectionHeader eyebrow="Concept" title="あなたのための、ひとときを" lead="決まったコースではなく、その日のあなたに合わせて。心地よさを一番に考えた、オーダーメイドのケアです。" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px', maxWidth: 'var(--container)', margin: '0 auto' }}>
        {cols.map(([n, t, d]) => (
          <div key={n} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 32, color: 'var(--accent)' }}>{n}</span>
            <h3 style={{ fontFamily: 'var(--font-serif-jp)', fontSize: 20, fontWeight: 600, color: 'var(--plum)' }}>{t}</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.8, color: 'var(--text-body)', maxWidth: '24ch' }}>{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ Menu */
function MenuSection({ onBook }) {
  const menus = [
    { rank: 'No.1', name: 'オーダーメイドケア', duration: '90分', regular: '12,800円', now: '10,800円',
      description: 'その日の状態に合わせて施術内容を調整。アロマ・ボディケア・ヘッド・リフレなど自由に組み合わせ可能。初めての方にもおすすめです。' },
    { name: '毛穴洗浄 × 水光フェイシャル', duration: '60分', regular: '9,400円', now: '7,800円', emphasis: 'accent',
      description: 'クレンジング・洗顔後、スチームと泥パックで毛穴の皮脂汚れを洗浄。デコルテマッサージで顔のこりをほぐし、透明感のある肌へ。' },
    { name: 'ドライヘッドスパ × ボディケア', duration: '90分', regular: '9,600円', now: '8,500円',
      description: '眼精疲労・首肩こりが気になる方に。ヘッドまで行うことで自律神経を整え、慢性的な疲れをやわらげます。オイルが苦手な方や男性にも。' },
  ];
  return (
    <section id="menu" style={{ padding: '88px 40px', maxWidth: 'var(--container)', margin: '0 auto' }}>
      <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto 48px' }}>
        <SectionHeader eyebrow="Menu" title="人気のメニュー" lead="グランドオープン記念の特別価格でご案内しています。" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {menus.map((m, i) => (
          <MenuCard key={i} {...m} image={<Photo label="" />} />
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Button size="lg" onClick={onBook}>空き状況を確認する</Button>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Access */
function AccessSection() {
  const rows = [
    ['店舗名', 'nestia. relaxation salon'],
    ['住所', '東京都立川市柴崎町3-8-10 collabo 2F'],
    ['アクセス', '立川南駅 徒歩1分 / JR立川駅 南口 徒歩3分'],
    ['営業時間', '10:00 〜 22:00（最終受付21:00・完全予約制）'],
    ['Instagram', '@nestia_kawamoto'],
  ];
  return (
    <section id="access" style={{ background: 'var(--plum)', padding: '88px 40px' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }}>
        <div>
          <SectionHeader tone="dark" align="left" eyebrow="Access" title="店舗のご案内" titleFont="display" />
          <dl style={{ margin: '32px 0 0', display: 'flex', flexDirection: 'column', gap: '0' }}>
            {rows.map(([k, v]) => (
              <div key={k} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '16px', padding: '14px 0', borderBottom: '1px solid color-mix(in oklch, var(--cream) 18%, transparent)' }}>
                <dt style={{ fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--almond)' }}>{k}</dt>
                <dd style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--cream)' }}>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <Photo ratio="1 / 1" radius="var(--r-xl)" label="map / interior" style={{ boxShadow: 'var(--shadow-lg)' }} />
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Footer */
function Footer() {
  return (
    <footer style={{ background: 'var(--plum-700)', padding: '44px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
      <Logo tone="cream" size={26} />
      <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '0.08em', color: 'var(--almond)' }}>© 2026 nestia. relaxation salon — Tachikawa, Tokyo</span>
    </footer>
  );
}

/* --------------------------------------------------------- Booking modal */
function BookingModal({ open, onClose }) {
  const [done, setDone] = useState(false);
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(60,46,43,0.42)', backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ width: 'min(460px, 100%)', background: 'var(--cream)', borderRadius: 'var(--r-xl)', padding: '36px', boxShadow: 'var(--shadow-lg)', position: 'relative' }}
      >
        <button onClick={onClose} aria-label="close" style={{ position: 'absolute', top: 18, right: 18, border: 'none', background: 'transparent', fontSize: 22, color: 'var(--text-muted)', cursor: 'pointer', lineHeight: 1 }}>×</button>
        {done ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', marginBottom: 18 }} />
            <h3 style={{ fontFamily: 'var(--font-serif-jp)', fontSize: 24, color: 'var(--plum)', marginBottom: 12 }}>ご予約ありがとうございます</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-body)', lineHeight: 1.8 }}>確認のご連絡を差し上げます。<br />当日お会いできるのを楽しみにしております。</p>
            <div style={{ marginTop: 24 }}><Button variant="outline" onClick={onClose}>閉じる</Button></div>
          </div>
        ) : (
          <React.Fragment>
            <Eyebrow dot>Reservation</Eyebrow>
            <h3 style={{ fontFamily: 'var(--font-serif-jp)', fontSize: 24, color: 'var(--plum)', margin: '12px 0 22px' }}>ご予約</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Input label="お名前" placeholder="山田 花子" />
              <Input label="電話番号" type="tel" placeholder="080-0000-0000" />
              <Input label="ご希望日時" placeholder="6/20 14:00頃" />
              <Textarea label="ご要望（任意）" rows={3} placeholder="気になる箇所やご希望をお聞かせください" />
              <Button block size="lg" onClick={() => setDone(true)}>この内容で予約する</Button>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

function App() {
  const [booking, setBooking] = useState(false);
  const open = () => setBooking(true);
  return (
    <div>
      <Header onBook={open} />
      <Hero onBook={open} />
      <Concept />
      <MenuSection onBook={open} />
      <AccessSection />
      <Footer />
      <BookingModal open={booking} onClose={() => setBooking(false)} />
    </div>
  );
}

Object.assign(window, { Photo, Header, Hero, Concept, MenuSection, AccessSection, Footer, BookingModal, App });
