The salon menu item card from the flyer — rounded photo, plum name pill, discounted price, and description.

```jsx
<MenuCard
  rank="No.1"
  name="オーダーメイドケア"
  duration="90分"
  regular="12,800円"
  now="10,800円"
  description="その日の状態に合わせて施術内容を調整。アロマ・ボディケア・ヘッド・リフレなど自由に組み合わせ可能。"
  image={<img src="..." alt="" style={{width:'100%',height:'100%',objectFit:'cover'}} />}
/>
```

Composes `Badge` (plum name pill) + `PriceTag`. Omit `image` for a soft almond placeholder. `rank` shows a small ribbon. `emphasis="accent"` for the headline deal price.
