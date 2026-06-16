---
name: nestia-design
description: Use this skill to generate well-branded interfaces and assets for nestia. relaxation salon (Tachikawa, Tokyo), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- **Brand:** nestia. relaxation salon — dusty pink · brown · greige; calm, refined, gentle, lots of whitespace. Japanese-first copy, second-person and warm. No emoji.
- **Entry CSS:** link `styles.css` (it `@import`s all tokens + fonts).
- **Accent discipline:** Petal Rouge `#FF7D9B` only on CTAs, the wordmark period, discounted prices, the petal dot, and focus rings — never large fills.
- **Type:** Cormorant Garamond (Latin display/wordmark), Shippori Mincho (JP headings), Zen Kaku Gothic New (body). All Google Fonts.
- **Components:** read off `window.NestiaDesignSystem_9e0aed` after loading `_ds_bundle.js` — Button, Badge, Logo, Eyebrow, SectionHeader, PriceTag, MenuCard, Input, Textarea. See each `components/**/*.prompt.md`.
- **UI kits:** `ui_kits/website/` (marketing homepage) and `ui_kits/booking/` (mobile reservation flow) show the components composed in context.
- **Caveats:** fonts are Google-Font substitutions; photography is placeholder. Ask the user for original typefaces and real salon imagery.
