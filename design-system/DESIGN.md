# nestia. — DESIGN.md

> Implementation guide for **Claude Code / Codex / Next.js + Tailwind CSS**.
> その日のあなたに合わせた、オーダーメイドケア。
> A calm, refined relaxation-salon brand: dusty pink · brown · greige, airy
> whitespace, gentle serifs. This file is the single source of truth for
> rebuilding nestia. in a production stack. The canonical token CSS lives in
> `tokens/*.css`; this doc mirrors it and adds the implementation rules agreed in
> review (two-pink accessibility split, CTA roles, mobile, motion, imagery).

---

## 0. Purpose & Booking Funnel Goal  ★ read this before everything else

このLPは「美しいパンフレット」ではない。**目的を持った導線装置**である。
実装中に判断に迷ったら、色やフォントではなく、この章に戻って決める。

### 0.1 What this page is for（このLPの存在理由）

nestia. は施術歴7年・口コミ高評価という確かな信頼資産を既に持っている。
足りないのは「自分の城」——その信頼と世界観を、来店前の人に届け、
**予約までを自分の場所で完結させる**場所。このLPがその城になる。

> 一言で：**価格や割引で選ばれるのではなく、世界観と技術で選ばれるサロンへ。**
> このLPは、外部の予約プラットフォームへの依存から、自分の導線へ
> 重心を移していくための出発点である。

### 0.2 North Star（北極星 — なぜ高単価・高品質設計なのか）

参考にしているのは、価格競争から降りて長く続く個人サロンの経営構造。
この3点が、デザイン上のあらゆる判断（高単価に見合う上質さ・余白・静けさ）の理由：

1. **自分の城で完結する** — 予約も顧客との関係も、外部サイトではなく自分の手元に。
2. **価値で選ばれる** — 割引で比べられる土俿から降り、世界観・技術・人柄で選ばれる。
3. **積み上がる発信** — 流れて消える発信ではなく、残って効くストック型（声・記録）を育てる。

→ だからこのLPは「安く見せる」演出を一切しない。`激安`・煊り・点滅・
カウントダウンは §1 のトーン規定どおり**禁止**。上質さと静けさが価格の説得力になる。

### 0.3 Booking Funnel Goal（予約導線のゴール）★最重要

CTA の着地先には**明確な優先順位**がある。実装はこの順序を守る。

| 優先 | 着地先 | 位置づけ | 実装メモ |
|---|---|---|---|
| **1st（本命）** | **LINE 直予約**（将来：LINE 内で予約完結＝"LINEハーネス"） | このLPが目指す最終形。LINEまで来た人を外部に送り返さず自分の城で見送る | 現状はLINE公式へ誘導。予約完結フローは今後実装。CTAコピー・遷移先は将来差し替え前提で**コンポーネント化**しておく |
| 2nd（当面の実予約） | 外部予約サイト（現行の予約手段） | 今すぐ予約できる現実的な受け皿。残すが**第一CTAにはしない** | リンクは用意するが、ファーストビューの主役は 1st に寄せる |
| 3rd（補助） | 電話・問い合わせ | 取りこぼし防止 | §0.4 のTEL要確認を参照 |

**実装ルール（重要）:**
- **第一CTA（primary・ピンク）は常に「LINEに向かう導線」**として設計する。
  将来、遷移先をLINE予約完結URLに差し替えるだけで済むよう、CTAの遷移先は
  ベタ書きせず1か所（env / config）で管理する。
- 外部予約サイトへのCTAは `secondary`（plum・outline）扱い。ピンクにしない。
  → §3 の "1ビューにpinkは最大1つ" ルールと整合する。
- 「LINEに来た人を外部サイトへ送り返す」構造を**新たに増やさない**。
  LPの役割は、外部依存を減らし、自分の導線に重心を移すこと。

### 0.4 Data hygiene（実装前に確定すべき事実）

- **TEL `080-4848-9176` は要確認** — オーナー個人の携帯番号の可能性が高い。
  LPに公開する番号として正しいか、本人に確認してから掲載する。
  確認が取れるまでは電話CTAを**仮（非公開 or コメントアウト）**で実装。
- 住所は **「東京都立川市柴崎町3-8-10 collabo 2F」**（1階はボードゲーム店）。
  旧表記「2階」は更新する。最寄りは**立川南駅 徒歩1分** / JR立川駅南口 徒歩3分。

---

## 1. Brand voice (copy)

- **Language:** Japanese is primary. English is *atmosphere* only — wide-tracked
  uppercase labels (`MENU`, `ACCESS`) and the wordmark. Never put information
  only in English.
- **Tone:** 上品 / 落ち着いた / やさしい / プライベート. Speak *to* the guest
  (あなた), softly and invitationally. No exclamation marks, no hype, no 激安.
- **Wordmark:** always lowercase `nestia.` with the trailing period.
- **Origin / 語源:** `nestia.` は「巣（nest）のような、帰れる場所」から。
  本人の言葉。Concept/Story コピーの核として使い、説明しすぎず静かに効かせる。
  （"その日のあなたに合わせて" と並ぶ、世界観の背骨）
- **Prices:** always full units — `90分`, `10,800円`, `（税込）`. Show the
  journey: `通常 12,800円 → 10,800円`; the "after" price is the hero.
- **Emoji:** none. The only recurring ornament is a small petal dot (●) and a
  thin hairline rule.

---

## 2. Color system — **two pinks** (the key accessibility rule)

`#FF7D9B` is the brand's signature pink but is **too light for white text / white
backgrounds**. It is therefore split into two tokens with strict roles:

| Token | Hex | Role |
|---|---|---|
| `--petal` (**Brand Accent**) | `#FF7D9B` | **Decorative only:** petals, the sakura dot, the wordmark period, soft washes, the small mark beside a price. **Never** text, borders, or CTA fills. |
| `--petal-accessible` (**Accessible Pink**) | `#C73A63` | Everything that must read: primary CTA fill (white text), knockout text + border, small badge text, booking-funnel emphasis, focus ring, link hover. |
| `--petal-accessible-700` | `#A82C50` | Accessible-pink hover / pressed. |

### Full palette

```
/* Primary */
--plum:    #77524E;   /* Chocolate Plum — headings, body emphasis, secondary CTAs, dark surfaces */
--rose:    #886867;   /* Smoky Rose — secondary text, soft borders */
--plum-700:#5E3F3C;   /* deep plum — pressed, strong type */
--plum-300:#A98884;   /* light plum */

/* Secondary */
--almond:    #DBB6AB; /* Almond Silk — soft fills, tags */
--almond-200:#ECDCD5; /* pale almond — soft chips, hover fills */
--almond-100:#F4E9E4; /* faintest wash (= --surface-soft) */
--taupe:     #AC9B90; /* Taupe — muted UI, dividers on dark */

/* Background */
--dust:  #D0CCC9;     /* Dust Grey — sunken surfaces, disabled fills */
--cream: #F8F4F1;     /* page background */
--white: #FFFFFF;     /* cards */

/* Accent (see two-pink table above) */
--petal: #FF7D9B;  --petal-soft: #FFE3EA;  --petal-deep: #E85F7E;  /* decorative */
--petal-accessible: #C73A63;  --petal-accessible-700: #A82C50;     /* interactive */

/* Warm neutrals / text */
--ink:       #3C2E2B; /* strongest text */
--ink-soft:  #5C4A46; /* body text, disabled-button text */
--text-muted:#7C6A64; /* captions, meta, struck price — darkened to meet AA */
--line:      #E7DCD6; /* hairline border on light */
--line-soft: #F0E7E2; /* faintest divider */
```

### Semantic aliases (use these in components, not raw hex)

```
--text-strong: var(--plum);          --text-body: var(--ink-soft);
--text-muted:  #7C6A64;              --text-on-dark: var(--cream);
--surface-page: var(--cream);        --surface-card: var(--white);
--surface-sunken: var(--dust);       --surface-soft: var(--almond-100);
--surface-dark: var(--plum);
--cta-bg: var(--petal-accessible);   --cta-bg-hover: var(--petal-accessible-700);  --cta-text: #fff;
--accent: var(--petal);              /* decorative spark */
--accent-text: var(--petal-accessible); /* interactive/text accent */
--focus-ring: color-mix(in oklch, var(--petal-accessible) 60%, transparent);
--price-now: var(--plum);            --price-strike: var(--text-muted);
```

---

## 3. CTA role split (rule #1 — don't let the page go all-pink)

Pink is for the **booking funnel only**. Everything else is plum.

| Use | Variant | Style |
|---|---|---|
| **予約・空き確認** (book, check availability) | `primary` | `#C73A63` fill + white text |
| Urgency / emphasis chip (本日空きあり) | `accent` | white fill + `#C73A63` text **and** border (knockout) |
| **補助 CTA** — メニュー / 詳しく見る / 戻る / 閉じる | `outline` / `ghost` | white/transparent + Chocolate Plum `#77524E` text (outline adds a plum border) |
| Disabled / 満席 | `disabled` | low-saturation `--dust` fill + `--ink-soft` text (no opacity wash) |

**Guideline:** at most one `primary` (pink) button per view section. Back/close/
secondary navigation is **always** plum, never pink. A page full of pink buttons
is off-brand.

---

## 4. Accessibility — measured contrast

Targets: **normal text ≥ 4.5:1**, **large/bold text · UI parts · borders ≥ 3:1**.
All pairings below pass:

| Element | Fg / Bg | Ratio | Pass |
|---|---|---|---|
| Primary CTA | `#FFF` on `#C73A63` | ~4.7:1 | ✅ |
| Accent knockout text/border | `#C73A63` on `#FFF` | ~4.7:1 | ✅ |
| Secondary (plum) | `#77524E` on `#FFF` | ~6.8:1 | ✅ |
| Body text | `#5C4A46` on `#F8F4F1` | ~7:1 | ✅ |
| Muted / meta / struck price | `#7C6A64` on `#FFF` | ~5:1 | ✅ |
| Badge soft | `#5E3F3C` on `#ECDCD5` | ~7:1 | ✅ |
| Badge plum | `#F8F4F1` on `#77524E` | ~6.5:1 | ✅ |
| Badge accent text | `#A82C50` on `#FFE3EA` | ~5.5:1 | ✅ |
| Disabled button | `#5C4A46` on `#D0CCC9` | ~5.2:1 | ✅ |

Notes: badge accent text uses `--petal-accessible-700` (not `#C73A63`) because the
soft-pink chip background pushes `#C73A63` just under 4.5:1. `--text-muted` was
darkened from the original `#94837E` (≈3.6:1, failing) to `#7C6A64` (≈5:1). Brand
pink `#FF7D9B` is never used for any text or border, so it is exempt from the
text-contrast requirement (decorative use only).

---

## 5. Typography

**Google Fonts** — three families, each a clear job:

| Token | Family | Weights | Role |
|---|---|---|---|
| `--font-display` | **Cormorant Garamond** (fallback Shippori Mincho) | 300–600, italic | Latin display, the `nestia.` wordmark, italic numerals (`01/02/03`, prices' step indices) |
| `--font-serif-jp` | **Shippori Mincho** | 400–700 | Japanese headings & lead copy — carries the emotional headlines |
| `--font-body` | **Zen Kaku Gothic New** (fallback Hiragino/Yu Gothic) | 300–700 | UI + running text, JP & Latin |

**Roles:** headings = `--font-serif-jp` for JP, `--font-display` for Latin display;
body/UI = `--font-body`; numerals & step indices = `--font-display` italic.

**Scale (16px base):** `--fs-display` 4.5rem · `--fs-h1` 3 · `--fs-h2` 2.25 ·
`--fs-h3` 1.625 · `--fs-h4` 1.25 · `--fs-lead` 1.125 · `--fs-body` 1 · `--fs-sm`
0.875 · `--fs-xs` 0.75.
**Line-height:** tight 1.12 / snug 1.35 / normal 1.7 / relaxed 1.9 (body breathes).
**Tracking:** `--ls-label` 0.22em (uppercase Latin) · `--ls-jp` 0.06em ·
`--ls-display` 0.04em · `--ls-body` 0.02em.

### `next/font` setup

```ts
// app/fonts.ts
import { Cormorant_Garamond, Shippori_Mincho, Zen_Kaku_Gothic_New } from 'next/font/google';

export const display = Cormorant_Garamond({
  subsets: ['latin'], weight: ['300','400','500','600'], style: ['normal','italic'],
  variable: '--font-display', display: 'swap',
});
export const serifJp = Shippori_Mincho({
  weight: ['400','500','600','700'], subsets: ['latin'],
  variable: '--font-serif-jp', display: 'swap',
});
export const body = Zen_Kaku_Gothic_New({
  weight: ['300','400','500','700'], subsets: ['latin'],
  variable: '--font-body', display: 'swap',
});
// <html className={`${display.variable} ${serifJp.variable} ${body.variable}`}>
```

---

## 6. Spacing · radii · shadows · motion

```
/* 8px rhythm */ --sp-1..10: 4 8 12 16 24 32 48 64 96 128 (px)
/* radii */      --r-xs 6 · --r-sm 10 · --r-md 16 · --r-lg 24 · --r-xl 32 · --r-pill 999 · --r-circle 50%
/* shadows (warm-tinted, never grey/harsh) */
--shadow-xs: 0 1px 2px rgba(60,46,43,.05);
--shadow-sm: 0 4px 14px rgba(119,82,78,.07);
--shadow-md: 0 10px 30px rgba(119,82,78,.10);
--shadow-lg: 0 24px 60px rgba(119,82,78,.14);
--shadow-focus: 0 0 0 4px var(--focus-ring);
/* motion */ --ease cubic-bezier(.22,.61,.36,1) · --dur-fast 140 · --dur 240 · --dur-slow 420ms
/* layout */ --container 1200px · --container-narrow 760px
```

**Cards:** white on cream, 1px `--line-soft` border, `--r-lg` corners, `--shadow-sm`.
Menu-name labels and CTAs are full pills (`--r-pill`). Photos use `--r-md`/`--r-lg`
or circular crops.

---

## 7. Components (props → behavior)

All read CSS custom properties; no hard-coded hex. Public API names match the
design-system bundle.

- **Button** `variant: 'primary'|'accent'|'outline'|'ghost'` · `size: 'sm'|'md'|'lg'`
  · `block` · `disabled` · `iconLeft/iconRight` · `as`. Pill shape, `--ls-body`
  tracking. Hover: primary→`--cta-bg-hover`, outline/ghost→`--almond-100` wash,
  accent→`--petal-soft`. Active: `translateY(.5px)`. Disabled → dust fill (see §3).
- **Badge** `variant: 'soft'|'plum'|'outline'|'accent'` · `size`. `plum` = the
  flyer menu-name pill (plum fill, cream text). `accent` = urgency chip
  (`--petal-soft` fill, `--petal-accessible-700` text, accessible-pink border).
- **Eyebrow** `dot` (petal dot) · `tone: 'muted'|'plum'`. Wide-tracked uppercase
  Latin micro-label — the signature device.
- **Logo** `size` · `tone` · `showTagline`. `nestia` + petal-`.` (decorative
  `--accent`), optional italic "relaxation salon".
- **PriceTag** `duration` · `regular` · `now` · `note` (`税込`) · `emphasis:
  'plum'|'accent'` · `size`. Struck regular → arrow → bold now-price. `accent`
  emphasis renders the now-price in `--petal-accessible`. All price spans are
  `white-space: nowrap` so values never break mid-number.
- **MenuCard** `name` · `duration` · `regular` · `now` · `description` · `image`
  · `rank` · `emphasis`. Photo-left + plum name pill + PriceTag + description.
  **Stacks vertically below 480px** (see §8).
- **Input / Textarea** `label` · standard form props. Plum label, hairline border,
  accessible-pink focus ring.

---

## 8. Mobile layout (verify at 375px)

- **MenuCard** stacks to a single column under **480px** — full-width photo on top
  (height 180px), then name / price / description. The page CSS does this via:
  ```css
  @media (max-width: 480px) {
    .n-menu-card { grid-template-columns: 1fr; gap: 16px; }
    .n-menu-card > .photo { width: 100%; height: 180px; }
  }
  ```
  (In Tailwind, build the card mobile-first: `grid grid-cols-1 sm:grid-cols-[136px_1fr]`.)
- **Hero CTAs** wrap (`flex-wrap`) so primary + secondary stack when they don't fit.
- **Price** never breaks mid-value (nowrap spans). Keep the now-price ≥ 18px.
- **Tap targets** ≥ 44px. Sticky booking bar at the bottom of funnel screens.
- Section padding tightens on mobile: `88px 40px` desktop → ~`48px 20px` phone.

---

## 9. Motion

- **Allowed:** logo handwriting/draw-in (Latin wordmark), drifting sakura petals,
  light fade and short slide on section/element entrance.
- **Forbidden:** bounce, spring, large parallax, anything that moves or obscures a
  CTA or price while the user is reading it. Booking-funnel buttons and prices stay
  perfectly still and legible.
- **Tokens:** `--ease` (cubic-bezier .22,.61,.36,1), durations 140–420ms. Hover =
  color only; press = `translateY(.5px)`.
- **`prefers-reduced-motion`:** gate all decorative motion. Petals and the logo
  draw-in must render in their final state (no opacity:0 leftovers) when reduced.
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }
  }
  ```

---

## 10. Imagery (real photos replace placeholders)

The system ships placeholder gradients; production must swap in real salon
photography following these rules:

- **Tone:** warm, natural light, soft and gentle. Never cool, high-contrast, or
  clinical. A faint warm grain is on-brand.
- **Subjects:** closed eyes, calm faces, towels, hands, treatment scenes, salon
  interior; the hero portrait mirrors the flyer.
- **Crop:** rounded corners (`--r-md`/`--r-lg`) or circular (`--r-circle`) for
  the small "after" thumbnails. Hero portrait ~`4 / 5`.
- **Treatment:** white card frame + `--shadow-sm/md`; optional thin almond inner
  border. No text baked into images; no photographic backgrounds behind body text.
- **Next.js:** use `next/image` with explicit `sizes`, `priority` on the hero,
  warm `placeholder="blur"`. Always provide meaningful `alt` in Japanese.

---

## 11. Tailwind config

Map tokens so utilities stay on-brand. Reference CSS vars (single source of truth):

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        plum: { DEFAULT: 'var(--plum)', 700: 'var(--plum-700)', 300: 'var(--plum-300)' },
        rose: 'var(--rose)',
        almond: { DEFAULT: 'var(--almond)', 200: 'var(--almond-200)', 100: 'var(--almond-100)' },
        taupe: 'var(--taupe)', dust: 'var(--dust)', cream: 'var(--cream)',
        petal: { DEFAULT: 'var(--petal)', soft: 'var(--petal-soft)', deep: 'var(--petal-deep)' },
        'petal-accessible': { DEFAULT: 'var(--petal-accessible)', 700: 'var(--petal-accessible-700)' },
        ink: { DEFAULT: 'var(--ink)', soft: 'var(--ink-soft)' },
        muted: 'var(--text-muted)', line: { DEFAULT: 'var(--line)', soft: 'var(--line-soft)' },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        'serif-jp': ['var(--font-serif-jp)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      borderRadius: { sm: '10px', md: '16px', lg: '24px', xl: '32px', pill: '999px' },
      boxShadow: {
        xs: '0 1px 2px rgba(60,46,43,.05)', sm: '0 4px 14px rgba(119,82,78,.07)',
        md: '0 10px 30px rgba(119,82,78,.10)', lg: '0 24px 60px rgba(119,82,78,.14)',
      },
      letterSpacing: { label: '0.22em', jp: '0.06em' },
      maxWidth: { container: '1200px', narrow: '760px' },
      transitionTimingFunction: { brand: 'cubic-bezier(.22,.61,.36,1)' },
    },
  },
};
```

```css
/* globals.css — import the token files (or paste :root blocks), then: */
@tailwind base; @tailwind components; @tailwind utilities;
body { background: var(--surface-page); color: var(--text-body); font-family: var(--font-body); }
h1,h2,h3,h4 { font-family: var(--font-serif-jp); color: var(--plum); letter-spacing: .04em; }
```

### Button quick-reference (Tailwind)

```tsx
// primary (booking funnel)
<button className="rounded-pill bg-petal-accessible hover:bg-petal-accessible-700 text-white px-7 py-3.5 font-body tracking-[0.04em] transition-colors duration-200">ご予約はこちら</button>
// accent knockout
<button className="rounded-pill bg-white text-petal-accessible-700 border border-petal-accessible px-6 py-3">本日空きあり</button>
// secondary
<button className="rounded-pill bg-white text-plum border border-plum px-7 py-3.5">メニューを見る</button>
// disabled / 満席
<button disabled className="rounded-pill bg-dust text-ink-soft px-7 py-3.5 cursor-not-allowed">満席</button>
```

---

## File map (this design system)

- `styles.css` — entry point (imports only).
- `tokens/` — `fonts.css` (Google Fonts), `colors.css`, `typography.css`,
  `spacing.css`, `base.css` (resets, button hover/press, mobile MenuCard rule).
- `components/core/` — Button, Badge, Logo, Eyebrow · `components/content/` —
  SectionHeader, PriceTag, MenuCard · `components/forms/` — Input, Textarea.
- `ui_kits/website/` — marketing homepage · `ui_kits/booking/` — mobile flow.
- `guidelines/*.card.html` — foundation specimen cards (Design System tab).

## Open items
- Fonts are **Google Fonts substitutions** (Cormorant Garamond / Shippori Mincho /
  Zen Kaku Gothic New). Swap to the original faces if available.
- **No real photography or vector logo yet** — placeholders throughout. See §10.
