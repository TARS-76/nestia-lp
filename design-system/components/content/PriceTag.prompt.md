Flyer-style price line: duration · struck regular price → current price · (税込).

```jsx
<PriceTag duration="90分" regular="12,800円" now="10,800円" />
<PriceTag now="7,800円" emphasis="accent" size="lg" />
```

`emphasis="accent"` turns the current price petal rouge — use for the headline deal. Sizes `sm | md | lg`. Set `note={null}` to drop the tax note.
