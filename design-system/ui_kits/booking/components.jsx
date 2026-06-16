/* nestia. — Mobile booking UI kit
   A phone-framed flow: menu list → detail → reservation → confirmed.
   Reads primitives from window.NestiaDesignSystem_9e0aed. */

const { useState } = React;
const DSb = window.NestiaDesignSystem_9e0aed;
const { Logo, Button, Badge, Eyebrow, PriceTag, Input, Textarea } = DSb;

const MENUS = [
  { id: 'order', rank: 'No.1', name: 'オーダーメイドケア', duration: '90分', regular: '12,800円', now: '10,800円',
    description: 'アロマ・ボディ・ヘッド・リフレを自由に組み合わせ。その日の状態に合わせて施術内容を調整します。' },
  { id: 'facial', name: '毛穴洗浄 × 水光フェイシャル', duration: '60分', regular: '9,400円', now: '7,800円', emphasis: 'accent',
    description: 'スチームと泥パックで毛穴を洗浄。デコルテマッサージで顔のこりをほぐし、透明感のある肌へ。' },
  { id: 'head', name: 'ドライヘッドスパ × ボディケア', duration: '90分', regular: '9,600円', now: '8,500円',
    description: '眼精疲労・首肩こりに。自律神経を整え、慢性的な疲れをやわらげます。男性にもおすすめ。' },
];

function MiniPhoto({ h = 150, label = '' }) {
  return (
    <div style={{ width: '100%', height: h, background: 'linear-gradient(135deg, var(--almond-200), var(--dust) 60%, var(--taupe))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(119,82,78,0.5)' }}>{label}</span>
    </div>
  );
}

function AppBar({ title, onBack }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 18px', borderBottom: '1px solid var(--line-soft)', background: 'color-mix(in oklch, var(--cream) 90%, transparent)', backdropFilter: 'blur(8px)', position: 'sticky', top: 0, zIndex: 5 }}>
      {onBack ? (
        <button onClick={onBack} aria-label="back" style={{ border: 'none', background: 'transparent', fontSize: 22, color: 'var(--plum)', cursor: 'pointer', lineHeight: 1, padding: 0, width: 28 }}>‹</button>
      ) : <span style={{ width: 28 }} />}
      {title ? (
        <span style={{ fontFamily: 'var(--font-serif-jp)', fontSize: 16, fontWeight: 600, color: 'var(--plum)' }}>{title}</span>
      ) : (
        <Logo size={20} showTagline={false} />
      )}
    </div>
  );
}

/* ----------------------------------------------------------- List screen */
function ListScreen({ onSelect }) {
  return (
    <div>
      <AppBar />
      <MiniPhoto h={170} label="hero" />
      <div style={{ padding: '22px 18px 96px' }}>
        <Eyebrow dot>Menu</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-serif-jp)', fontSize: 22, fontWeight: 600, color: 'var(--plum)', margin: '10px 0 20px', lineHeight: 1.4 }}>
          今日のあなたに<br />合わせて選ぶ
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {MENUS.map((m) => (
            <button
              key={m.id}
              onClick={() => onSelect(m)}
              style={{ textAlign: 'left', border: '1px solid var(--line-soft)', background: 'var(--white)', borderRadius: 'var(--r-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', cursor: 'pointer', padding: 0 }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '92px 1fr', gap: 14, alignItems: 'center' }}>
                <div style={{ position: 'relative' }}>
                  <MiniPhoto h={92} />
                  {m.rank && <span style={{ position: 'absolute', top: 8, left: 8, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 11, color: 'var(--cream)', background: 'rgba(119,82,78,0.78)', padding: '1px 8px', borderRadius: 'var(--r-pill)' }}>{m.rank}</span>}
                </div>
                <div style={{ padding: '10px 14px 10px 0', display: 'flex', flexDirection: 'column', gap: 7 }}>
                  <span style={{ fontFamily: 'var(--font-serif-jp)', fontSize: 14.5, fontWeight: 600, color: 'var(--plum)', lineHeight: 1.4 }}>{m.name}</span>
                  <PriceTag duration={m.duration} now={m.now} note={null} emphasis={m.emphasis || 'plum'} size="sm" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------------- Detail screen */
function DetailScreen({ menu, onBack, onBook }) {
  return (
    <div>
      <AppBar title="メニュー詳細" onBack={onBack} />
      <MiniPhoto h={200} label="treatment" />
      <div style={{ padding: '22px 18px 110px' }}>
        <Badge variant="plum">{menu.name}</Badge>
        <div style={{ margin: '18px 0' }}>
          <PriceTag duration={menu.duration} regular={menu.regular} now={menu.now} emphasis={menu.emphasis || 'plum'} size="lg" />
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.85, color: 'var(--text-body)' }}>{menu.description}</p>
        <div style={{ height: 1, background: 'var(--line)', margin: '22px 0' }} />
        <Eyebrow>Flow</Eyebrow>
        <ol style={{ margin: '12px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {['カウンセリング', '施術（オーダーメイド）', '仕上げ・アフターケア'].map((s, i) => (
            <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 18, color: 'var(--accent)', width: 22 }}>{`0${i + 1}`}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--ink-soft)' }}>{s}</span>
            </li>
          ))}
        </ol>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '14px 18px', background: 'color-mix(in oklch, var(--cream) 92%, transparent)', backdropFilter: 'blur(8px)', borderTop: '1px solid var(--line-soft)' }}>
        <Button block size="lg" onClick={onBook}>このメニューで予約</Button>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------- Form screen */
function FormScreen({ menu, onBack, onSubmit }) {
  return (
    <div>
      <AppBar title="ご予約" onBack={onBack} />
      <div style={{ padding: '22px 18px 110px' }}>
        <div style={{ background: 'var(--surface-soft)', borderRadius: 'var(--r-md)', padding: '14px 16px', marginBottom: 22, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-serif-jp)', fontSize: 13.5, fontWeight: 600, color: 'var(--plum)' }}>{menu.name}</span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-muted)' }}>{menu.duration}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Input label="お名前" placeholder="山田 花子" />
          <Input label="電話番号" type="tel" placeholder="080-0000-0000" />
          <Input label="ご希望日時" placeholder="6/20 14:00頃" />
          <Textarea label="ご要望（任意）" rows={3} placeholder="気になる箇所をお聞かせください" />
        </div>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '14px 18px', background: 'color-mix(in oklch, var(--cream) 92%, transparent)', backdropFilter: 'blur(8px)', borderTop: '1px solid var(--line-soft)' }}>
        <Button block size="lg" onClick={onSubmit}>この内容で予約する</Button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------- Confirm screen */
function ConfirmScreen({ onDone }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '40px 28px', textAlign: 'center', gap: 16 }}>
      <span style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--accent)' }} />
      <h2 style={{ fontFamily: 'var(--font-serif-jp)', fontSize: 22, fontWeight: 600, color: 'var(--plum)', lineHeight: 1.5 }}>ご予約<br />ありがとうございます</h2>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.85, color: 'var(--text-body)' }}>確認のご連絡を差し上げます。<br />当日お会いできるのを<br />楽しみにしております。</p>
      <div style={{ marginTop: 10 }}><Button variant="outline" onClick={onDone}>メニューに戻る</Button></div>
    </div>
  );
}

/* ----------------------------------------------------------- Phone shell */
function Phone({ children }) {
  return (
    <div style={{ width: 390, height: 800, background: 'var(--cream)', borderRadius: 46, border: '11px solid #2A2120', boxShadow: 'var(--shadow-lg)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 130, height: 26, background: '#2A2120', borderRadius: '0 0 16px 16px', zIndex: 30 }} />
      <div style={{ position: 'absolute', inset: 0, overflowY: 'auto', borderRadius: 35 }}>{children}</div>
    </div>
  );
}

function BookingApp() {
  const [stack, setStack] = useState([{ screen: 'list' }]);
  const [menu, setMenu] = useState(null);
  const top = stack[stack.length - 1];
  const push = (s) => setStack((st) => [...st, s]);
  const back = () => setStack((st) => st.slice(0, -1));
  const reset = () => { setStack([{ screen: 'list' }]); setMenu(null); };

  let view;
  if (top.screen === 'list') view = <ListScreen onSelect={(m) => { setMenu(m); push({ screen: 'detail' }); }} />;
  else if (top.screen === 'detail') view = <DetailScreen menu={menu} onBack={back} onBook={() => push({ screen: 'form' })} />;
  else if (top.screen === 'form') view = <FormScreen menu={menu} onBack={back} onSubmit={() => push({ screen: 'confirm' })} />;
  else view = <ConfirmScreen onDone={reset} />;

  return <Phone>{view}</Phone>;
}

Object.assign(window, { BookingApp });
