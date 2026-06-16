# nestia. relaxation salon — Design System

> その日のあなたに合わせた、オーダーメイドケア。
> *Made-to-order care, tailored to the you of today.*

nestia. is a private relaxation salon in Shibasaki-chō, Tachikawa, Tokyo — a
3-minute walk from JR Tachikawa Station, opened 4.11. The brand sells calm,
attentiveness, and a "made for today's you" promise: rather than fixed courses,
treatments are assembled to suit each guest's body and mood on the day.

This design system encodes that feeling — **dusty pink, brown, and greige; soft
elegant serifs; airy whitespace** — into tokens, components, and full UI kits.

## Source material
- `uploads/IMG_5198.jpeg` — the printed grand-open flyer (the single primary
  reference for layout, color, type tone, and menu copy).
- Brand-supplied palette + business facts (see Visual Foundations below).
- No codebase or Figma was provided; the system was authored from the flyer and
  the written brief. Photography in the kits is placeholder — **real salon
  imagery is needed** (see Caveats).

## Business facts
| | |
|---|---|
| Name | nestia. relaxation salon |
| Address | 東京都立川市柴崎町3-8-10 collabo 2F |
| Access | 立川南駅 徒歩1分 / JR立川駅 南口徒歩3分（1階：ボードゲーム店） |
| Hours | 10:00 – 22:00 |
| TEL | 080-4848-9176 ※要本人確認（個人携帯の可能性／公開可否を確認するまで仮） |
| Instagram | @nestia_kawamoto |

### Signature menus
1. **オーダーメイドケア** — 90分 / 12,800円 → **10,800円**（税込）
2. **毛穴洗浄 × 水光フェイシャル** — 60分 / 9,400円 → **7,800円**（税込）
3. **ドライヘッドスパ × ボディケア** — 90分 / 9,600円 → **8,500円**（税込）

---

## CONTENT FUNDAMENTALS

**Language.** Primary copy is Japanese; English appears only as wide-tracked
labels and the wordmark ("relaxation salon", "MENU", "ACCESS"). English is
atmosphere, not information.

**Voice — second person, gentle.** The brand speaks *to* the guest ("あなた"),
warmly and quietly. It never commands. Phrasing is invitational and soft:
"その日のあなたに合わせて" (tailored to the you of today), "やさしいひととき"
(a gentle moment), "ゆっくりと整えていきます" (we'll gently restore you). Avoid
hard sell, exclamation marks, or hype.

**Casing & tone.** The wordmark is always lowercase — `nestia.` with the period.
English labels are UPPERCASE with wide tracking. Japanese headings use elegant
mincho; running copy is calm gothic. Tone: 上品 (refined), 落ち着いた (calm),
やさしい (gentle), プライベート (private/intimate).

**Numbers & prices.** Always written with the full unit: `90分`, `10,800円`,
`（税込）`. Discounts show the journey: `通常 12,800円 → 10,800円`. The "after"
price is the hero.

**Emoji.** None. The brand uses no emoji. The only recurring ornament is a single
small **petal dot** (●, petal rouge) and a thin hairline rule — never decorative
icon clusters.

**Examples in-voice**
- ✓ 「その日の心と体に寄り添う、やさしいひとときを。」
- ✓ 「初めての方にもおすすめです。」
- ✓ 「当日予約OK / 本日空きあり」 (urgency stays soft, factual)
- ✗ 「今だけ激安！絶対お得！！」 (loud, salesy — off-brand)

---

## VISUAL FOUNDATIONS

**Color.** Dusty pink · brown · greige. A calm, low-contrast, warm palette.
- *Primary*: Chocolate Plum `#77524E` (headings, dark surfaces, primary CTA),
  Smoky Rose `#886867`.
- *Secondary*: Almond Silk `#DBB6AB`, Taupe `#AC9B90` (soft fills, dividers).
- *Background*: Dust Grey `#D0CCC9`, off-white Cream `#F8F4F1` (the page).
- *Accent — two pinks.* **Brand Accent `--petal #FF7D9B`** is decorative only:
  petals, the sakura dot, soft washes, the small mark beside a price. **Accessible
  Pink `--petal-accessible #C73A63`** does everything that must read — the primary
  CTA fill (white text), the knockout emphasis (white fill, pink text + border),
  small badge text, and booking-funnel emphasis. `#FF7D9B` is never used for text,
  borders, or CTA backgrounds (too low contrast on white). Chocolate Plum carries
  headings, body emphasis, and secondary CTAs. Targets: body text ≥ 4.5:1, large
  text / UI / borders ≥ 3:1. (See the *Accent Discipline* card.)
- Derived tints (`--plum-700`, `--almond-200`, `--petal-soft`, warm `--ink`)
  are oklch-harmonized to the base palette — don't invent new hues; mix from
  these.

**Typography.** Three families, each with a clear job:
- **Cormorant Garamond** (`--font-display`) — airy serif for the wordmark, big
  Latin display moments, and numerals/step-indices (often *italic*). Weights
  300–600.
- **Shippori Mincho** (`--font-serif-jp`) — elegant mincho for Japanese headings
  and lead copy. This carries most of the brand's emotional headlines.
- **Zen Kaku Gothic New** (`--font-body`) — soft humanist gothic for UI and
  running text, JP + Latin. Weights 300–700.
- Tracking is wide and deliberate: `--ls-label` (0.22em) on uppercase labels,
  gentle `--ls-jp` (0.06em) on Japanese. Line-height is generous (body 1.7–1.9)
  — *the brand breathes*.

**Layout & space.** 8px spacing rhythm; lots of negative space. Centered section
headers (eyebrow → mincho title → petal divider → lead) are the default opener.
Content max-widths: `--container` 1200px, `--container-narrow` 760px for text.

**Backgrounds.** Flat warm washes, never busy. The page is cream; alternating
sections use soft almond (`--surface-soft`) or a deep plum band for contrast.
The flyer's gentle wave/curve and floating sakura petals are the brand's
decorative motifs — used sparingly. No loud gradients, no photographic
backgrounds behind text.

**Imagery.** Warm, soft, natural-light spa/portrait photography — closed eyes,
calm faces, towels, hands. Rounded corners or circular crops. Tone is warm and
gentle, never cool or high-contrast. (Currently placeholders — see Caveats.)

**Corners & cards.** Generously rounded. Radii: sm 10 / md 16 / lg 24 / xl 32 /
pill. Cards are white on cream with a hairline border (`--line-soft`) and a
**soft, warm-tinted shadow** (`--shadow-sm`/`md`), never a hard or cool shadow.
Menu-name labels and CTAs are full pills.

**Borders & dividers.** Hairlines in `--line` / `--line-soft`. Section dividers
are a thin rule with a centered petal dot. On dark plum, dividers are translucent
cream.

**Elevation.** Four soft shadows, all tinted with plum (`rgba(119,82,78,…)`) —
warm, diffuse, low-opacity. Never neutral-grey or harsh.

**Motion.** Calm and gentle — `--ease` cubic-bezier(0.22,0.61,0.36,1), durations
140–420ms. Fades and soft slides; **no bounce, no spring**. Respect
`prefers-reduced-motion`.

**Hover / press.** The primary CTA darkens `#C73A63`→`--petal-accessible-700` on
hover; outline/ghost get a faint almond wash; accent (knockout) fills with a soft
petal wash. Focus shows an accessible-pink ring (`--focus-ring`). Press is a subtle
settle (translateY 0.5px), not a hard shrink. Links shift plum→accessible-pink on
hover. Transparency + blur is used only for sticky bars (frosted cream) and the
booking modal scrim. Disabled buttons drop to low-saturation dust with legible ink
(no opacity wash).

---

## ICONOGRAPHY

nestia. is **near-iconless by design** — the brand's restraint *is* the visual
language. There is no proprietary icon font and no icon set on the flyer.

- **Petal dot.** The one recurring mark: a small filled circle in Petal Rouge
  (`.n-sakura-dot`, the `dot` prop on `Eyebrow`/`SectionHeader`). Stands in for
  bullets, list markers, and divider centers.
- **Numerals as ornament.** Italic Cormorant numerals (`01 / 02 / 03`) mark
  steps and rankings instead of pictographic icons.
- **Chevrons / ×.** Plain Unicode (`‹`, `×`) for back/close in the mobile kit —
  no icon library.
- **No emoji. No SVG illustration.** The wave and sakura-petal motifs are brand
  decoration, not icons, and should come from real brand artwork when available.
- **If you must add icons** (e.g. an access map pin, phone, clock): use a thin,
  rounded, single-stroke set — **Lucide** is the closest CDN match in weight and
  feel (`https://unpkg.com/lucide-static`). Keep them plum or taupe, small, and
  rare. *(This is a substitution suggestion — the brand ships no icons today.)*

---

## INDEX — what's in this system

**Foundations (root)**
- `styles.css` — the single entry point consumers link (imports only).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`,
  `base.css` (element defaults + `.n-eyebrow`, `.n-rule`, `.n-sakura-dot`).

**Components** — `window.NestiaDesignSystem_9e0aed.*`
- `components/core/` — **Button**, **Badge**, **Logo**, **Eyebrow**
- `components/content/` — **SectionHeader**, **PriceTag**, **MenuCard**
- `components/forms/` — **Input**, **Textarea**
- Each has `.jsx` + `.d.ts` + `.prompt.md`; each folder has a `*.card.html` spec.

**UI kits**
- `ui_kits/website/` — marketing homepage (hero, concept, menu, access, footer,
  booking modal). A homepage **Starting Point**.
- `ui_kits/booking/` — phone-framed reservation flow (list → detail → form →
  confirm).

**Specimen cards (Design System tab)**
- Colors (3), Type (3), Spacing (2), Brand (2). Tagged `@dsCard`.

**Other**
- `SKILL.md` — makes this folder usable as a downloadable Agent Skill.

---

## CAVEATS / OPEN ITEMS
- **Fonts are Google Fonts substitutions.** The flyer's exact wordmark and
  mincho faces aren't supplied; I matched the tone with **Cormorant Garamond**
  (Latin) + **Shippori Mincho** (JP) + **Zen Kaku Gothic New** (body). If you
  have the original typefaces, share them and I'll swap them in.
- **No real photography.** All imagery is soft almond→dust placeholders. Please
  provide salon interior, treatment, and portrait photos (warm, soft, natural
  light) to replace the `<Photo>` / `MiniPhoto` placeholders.
- **No logo file.** The wordmark is reproduced as styled type (the `Logo`
  component). A vector logo from the brand would be preferable for exact kerning.
