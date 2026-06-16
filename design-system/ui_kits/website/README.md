# nestia. — Marketing Website UI kit

A single-page marketing homepage for the salon, the typical public-facing view.

## Screens / sections
- **Header** — sticky, blurred cream bar with logo + nav + reserve button.
- **Hero** — JP mincho headline, portrait photo placeholder, floating "本日空きあり" chip.
- **Concept** — 3-step order-made care explainer on a soft almond band.
- **MenuSection** — the three flyer menus rendered with `MenuCard`.
- **AccessSection** — store info table on a plum surface.
- **Footer** — logo + copyright on deep plum.
- **BookingModal** — interactive reservation form → confirmation state.

## Interaction
Any "ご予約" button opens `BookingModal`; submitting shows a thank-you state.

## Composition
Built entirely from the bundled primitives (`Logo`, `Button`, `Badge`, `Eyebrow`,
`SectionHeader`, `MenuCard`, `PriceTag`, `Input`, `Textarea`) read off
`window.NestiaDesignSystem_9e0aed`. `components.jsx` defines the sections and exports
them to `window`; `index.html` mounts `<App/>`.

## Assets
Photography is shown as soft almond→dust placeholders (`<Photo>`). Drop real salon
imagery in by swapping the placeholder for an `<img>`.
