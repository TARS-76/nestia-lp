# nestia. — Mobile Booking UI kit

A phone-framed reservation flow, the kind a guest would use from Instagram.

## Flow
`ListScreen` → `DetailScreen` → `FormScreen` → `ConfirmScreen`, with a back stack.

- **ListScreen** — scrollable menu list with thumbnail, name, price.
- **DetailScreen** — full menu detail, price, treatment flow, sticky book button.
- **FormScreen** — reservation form prefilled with the chosen menu.
- **ConfirmScreen** — thank-you confirmation; returns to the list.

## Composition
All primitives come from `window.NestiaDesignSystem_9e0aed` (`Logo`, `Button`, `Badge`,
`Eyebrow`, `PriceTag`, `Input`, `Textarea`). `Phone` is a local CSS device frame.

## Assets
Photos are soft placeholders — swap `MiniPhoto` for real `<img>` content.
