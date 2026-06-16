Labelled text input with a soft cream field and petal-rouge focus ring.

```jsx
<Input label="お名前" placeholder="山田 花子" />
<Input label="メール" type="email" hint="ご予約確認をお送りします" />
<Input label="電話番号" error="正しい番号を入力してください" />
```

Pass `hint` for helper text or `error` for a validation message (also recolors the border). Forwards all native input props.
