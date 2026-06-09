# miki-salon — Agent Instructions

## Codebase Map
### src/
src/app/lp/              → LP本体（ルーティング）
src/app/lp/components/   → LP内コンポーネント（旧構成）
src/app/dashboard/       → CRMダッシュボード
src/app/appointments/    → 予約管理
src/app/auth/            → Magic Link認証
src/app/chirashi/        → チラシページ
src/components/lp/       → LP専用コンポーネント（セクション別・現行）
src/components/ui/       → 共通UIコンポーネント
src/lib/                 → ユーティリティ・Supabaseクライアント

### ルート
skills/      → Claude Code用スキル定義（2回以上の作業はここに）
docs/        → 設計・構成図・決定記録
clients/     → クライアント別資料
memory/      → セッション学習メモ
supabase/    → マイグレーション・DB設定

## STOP conditions（即座に止めて確認）
- RLS・スキーマ・認証の変更
- 本番デプロイ（Vercel）
- .env.local が必要な処理
- マイグレーションファイル作成後の実行

## NEVER
- Supabase直接SQL実行（環境問わず）
- 機密情報をどこにも出力しない
- prototypes/への書き込み

## アーキテクチャ
- Server Components for reads / Server Actions for writes
- RLS: SELECT/WRITE 2ポリシー構成（customers・appointments共通）、DELETE RESTRICTIVE blocked、soft-delete

## customers RLSポリシー（2026-04-30 確定）
SELECT専用ポリシー（deleted_at IS NULL含む）＋WRITE専用ポリシー（deleted_at IS NULLなし）＋RESTRICTIVE DELETEブロックの4ポリシー構成。

```sql
-- ① SELECT: 論理削除行を除外
CREATE POLICY "customers_select_policy"
  ON customers FOR SELECT
  USING (salon_id = get_salon_id() AND deleted_at IS NULL);

-- ② WRITE: soft-delete UPDATE が通るよう deleted_at IS NULL を外す
CREATE POLICY "customers_write_policy"
  ON customers FOR ALL
  USING (salon_id = get_salon_id())
  WITH CHECK (salon_id = get_salon_id());

-- ③ RESTRICTIVE DELETE ブロック（hard-delete完全防止）
CREATE POLICY "customers_delete_block"
  ON customers AS RESTRICTIVE FOR DELETE
  USING (false);
```

**設計上の注意点**
- appointments と同じ SELECT/WRITE 分離パターン
- updateCustomer も .select() + 0行検出付き実装済み
- salon_id は app_metadata からのみ取得（user_metadata 不可）

## appointments RLS（2ポリシー構成）

| ポリシー | USING | WITH CHECK |
|---------|-------|-----------|
| SELECT | salon_id = get_salon_id() AND deleted_at IS NULL | — |
| WRITE(ALL) | salon_id = get_salon_id() | salon_id = get_salon_id() |

```sql
-- ① SELECT: 論理削除行を自動除外
CREATE POLICY "appointments_select_policy"
  ON appointments FOR SELECT
  USING (salon_id = get_salon_id() AND deleted_at IS NULL);

-- ② WRITE: soft-delete UPDATE が通るよう deleted_at IS NULL を外す
CREATE POLICY "appointments_write_policy"
  ON appointments FOR ALL
  USING (salon_id = get_salon_id())
  WITH CHECK (salon_id = get_salon_id());
```

> ⚠️ **注意**: ALLポリシーに `deleted_at IS NULL` を含めると soft-delete 時に **42501エラー**が発生。必ず SELECT / WRITE を分離すること。

**設計上の注意点**
- `get_salon_id()` は SECURITY DEFINER + `search_path = public, auth` 設定済み
- delete.ts の `.select()` + 0行検出はこの構成を前提として実装済み

## RLS + Soft-delete 設計原則（2026-05-20 確定）

### ① SELECT / WRITE ポリシー分離の必要性
soft-delete UPDATEを許可するには、WRITE (ALL) ポリシーに `deleted_at IS NULL` を**含めてはいけない**。
```sql
-- ❌ 間違い（42501エラーが発生）
CREATE POLICY "update_with_deleted_check"
  ON table FOR ALL
  USING (salon_id = get_salon_id() AND deleted_at IS NULL)
  WITH CHECK (salon_id = get_salon_id());

-- ✅ 正しい（SELECT と WRITE を分離）
CREATE POLICY "select_policy"
  ON table FOR SELECT
  USING (salon_id = get_salon_id() AND deleted_at IS NULL);

CREATE POLICY "write_policy"
  ON table FOR ALL
  USING (salon_id = get_salon_id())
  WITH CHECK (salon_id = get_salon_id());
```

### ② Hard-delete 完全防止パターン
DELETE操作を完全に防ぐには RESTRICTIVE ポリシーを追加：
```sql
CREATE POLICY "delete_block"
  ON table AS RESTRICTIVE FOR DELETE
  USING (false);
```
- RESTRICTIVE は最も厳格（1つでも `false` なら DELETE失敗）
- クライアント側は常に soft-delete（UPDATE deleted_at）のみ使用

### ③ クライアント実装パターン
soft-delete 削除時は必ず `.select()` + 0行検出を組み合わせる：
```typescript
const { data, error } = await supabase
  .from('table')
  .update({ deleted_at: new Date() })
  .eq('id', id)
  .eq('salon_id', get_salon_id())  // RLS二重チェック
  .select('id')  // SELECT ポリシーで除外されたら0行

if (error) throw error;
if (data.length === 0) {
  throw new Error('Record not found or already deleted');
}
```

### ④ テスト検証項目
- [ ] soft-delete (UPDATE) が成功し行が減る
- [ ] hard-delete (DELETE文) は 42501 エラーで失敗
- [ ] SELECT では deleted_at IS NULL 行のみ表示
- [ ] UPDATE deleted_at の後に SELECT すると削除済み行が見えない
- [ ] 別 salon_id ユーザーからのアクセスは RLS で全ブロック

## DBスキーマ（実テーブル）
- appointments: starts_at / ends_at / deleted_at / status
- customers: soft-delete = deleted_at

## ブランドカラー
配色SSOT: `design-system/miki-salon/MASTER.md` を参照（hex の実体は MASTER のみが保持。cocoa/sky/rose/mauve/ivory/text、reserved: sage、semantic: crimson=削除専用）。値をここに二重保持しない。

**テキスト色の方針**
- タイトル・入力フィールド・日付など、UI上のテキスト要素には MASTER の `text` トークン値を使う。
- globals.css の `--foreground` と同値。CSS変数が使えない inline style 文脈でも同じ値を直書きする。

## KPIカード配色定義
- カード1（総顧客数）: background `var(--color-sage)` / value `#4a7c2f`
- カード2（今月の新規）: background `#f0f5e8` / value `#4a7c2f`
- カード3（メール登録）: background `#fceef2` / value `var(--color-rose)`
- カード4（電話番号登録）: background `#f5eeed` / value `var(--color-mauve)`

## Supabaseクエリの注意点
- 多対一 join (`customers(name)` など) は配列 or オブジェクト or null を返す → resolveCustomerName のようなユーティリティで吸収する

## Server Actionの必須パターン
- 認証: `supabase.auth.getUser()` → `user.app_metadata?.salon_id` → insert に salon_id を含める → `revalidatePath` 呼ぶ
- ※ salon_id は `app_metadata` にのみ存在（`user_metadata` ではない）。取得失敗時は即 throw すること
- `revalidatePath` の引数は必ずページのパスを明示する（例: `revalidatePath('/dashboard')`, `revalidatePath('/customers')`, `revalidatePath('/appointments')`）

## 認証フロー
- ログイン: `/login` → Supabase Auth (email/password) → `auth/callback` route → `/dashboard`
- callback: `exchangeCodeForSession` 成功 → `/dashboard` へリダイレクト / 失敗 → `/login?error=auth_failed` へリダイレクト
- ログアウト: Server Action で `supabase.auth.signOut()` → `redirect('/login')`
- 未認証アクセス: middleware で `/login` へリダイレクト（`/login`, `/auth/**` は除外）
- セッション取得は常に `supabase.auth.getUser()` を使用（`getSession()` は不可）

## Coding principles
- 不明なら実装前に確認する
- 最小限の変更のみ
- 関係ないファイルを触らない


## CSS モバイル修正の原則

- モバイル用CSSは **1つのメディアクエリにまとめる**。分散追記は本番ビルドで競合する。
- 既存のモバイルルールが散らかったら **全削除→書き直し** が最速。`!important`の多用は競合の元。
- `ScrollRevealText`の`<p>`幅問題：ラッパー`div`に`min-width:0`、親コンテナに`overflow:hidden`で解決。
- ローカルで直っても本番で崩れる場合はCSSの記述順序・重複が原因を疑う。

## 詳細 → docs/context.md

## Context管理
- /compact実行後は必ずCLAUDE.mdを再読込してから作業を再開すること
- 同じミスを2回指摘した場合、その時点でCLAUDE.mdに追記すること（提案はGooseが行う）

## Agent Rules
See /mnt/c/Users/osw-04/wiki/deb/ROLE_TEMPLATE.md
See /mnt/c/Users/osw-04/wiki/deb/SYSTEM_REVIEW_RULE.md

## Skill Router（Goose実行原則）
タスク着手前に対応Skillを確認すること。
| タスク種別 | 参照Skill |
|-----------|-----------|
| RLS・Supabase変更 | skills/supabase-rls |
| Next.jsコンポーネント | skills/nextjs-component |
| 顧客管理UI | skills/crm-design |
| 予約テーブル操作 | skills/appointments-table |
| 環境変数・秘密情報 | skills/env-security |
不明な場合はCLAUDE.mdのArchitectureセクションを先に確認すること。

---

## Session Management Rules

> 参照: https://claude.com/blog/using-claude-code-session-management-and-1m-context

### 基本原則
- 新タスク = `/clear` + ブリーフを書いて新セッション開始
- 同一タスク継続 = そのまま Continue
- 失敗した試み = `/rewind` (Esc×2) で巻き戻し、学んだことを添えてリプロンプト

### コンテキスト管理
- セッションが肥大化したら先手で `/compact focus on [直近の変更内容]`
- 自動compactは最も性能が低い状態で発動するため、proactiveに使うこと

### Subagentを使う場面
「中間のtool outputは不要で、結論だけ必要か？」が判断基準。
以下の作業はSubagentに委任する：CLAUDE.md更新、RLSポリシー検証、Vitest生成、ドキュメント生成

### 判断テーブル

| 状況 | アクション |
|------|-----------|
| 同一タスク継続 | Continue |
| 間違った方向に進んだ | `/rewind` + 学びを添えてリプロンプト |
| デバッグログで汚染 | `/compact focus on [変更内容]` |
| 新タスク開始 | `/clear` + ブリーフ記載 |
| 検証・doc生成など | Subagent指示 |

---

## Goose モデル切り替えルール

| 用途 | モデル |
|------|--------|
| デフォルト（ファイル操作・定型実行・CLAUDE.md更新） | claude-haiku-4-5-20251001 |
| LP実装・CRMバグ修正・複雑な実装 | claude-sonnet-4-6 |

### Sonnetで実行する場合
config確認

---

## 次回タスク（2026-06-06更新）

### P1 — Miki確認待ち
1. 英文監修（`"bust-up"` 等の英語表現確認）
2. Stripe 本人確認（本番カットオーバー前提）

### P2 — 環境・基盤整備
3. **Obsidian 環境再構築** ✅ 6/6 完了
   - WSLパスエラー（EISDIRエラー）解決
   - obsidian-wiki を Windows パス（C:\Users\osw-04\Documents\obsidian-wiki）に clone
   - Windows Obsidian で閲覧可能に
   - 不要 Vault 削除（deb/wiki/.obsidian）
   - kagebunshinai Vault 再構築（posts/building-with-shadows, posts/missions-from-the-machine, ideas, drafts, published）
   - kagebunshinai-content GitHub repo 作成・HTTPS 連携・自動 push 確認済み
   - digital-ecosystem-builder repo 削除（obsidian-wiki に統合完了）

### P3 — LPデプロイ・機能拡張
4. Hero 改修（Anti-Grid Parallax）
5. METHOD・CTA stagger reveal追加
6. JP Testimonials スクロールアニメーション
7. DNS設定（`naturalbeausalon.com`）完了後に本番確認
8. kagebunshin-hero 動画を LP/SNS へ組み込む

### ✅ 完了済み（6/1-6/6）
- ACCESS・CTA・FooterSection 実装完了
- Our Promise セクション → 残す（確定）
- EN LP コピー・FAQ・Testimonials 整備完了
- JP LP スクロールアニメーション（Story・Mission・Method）整備完了
- miki-salon main: **e128cf4** push済（EN RECOMMENDED FOR画像・角丸12px統一・eyebrow間隔4rem統一）
- globals-lp.css 未定義トークン（--space-1/5/32, --section-py-md）修正完了
- Obsidian 環境完全再構築・Windows パス化・自動 push パイプライン確認

## 直近の変更（2026-06-06）
- **Obsidian**: WSL EISDIR エラー → Windows clone・Vault 統合完了
- **kagebunshinai Vault**: 5 フォルダ構成再構築・GitHub HTTPS 連携・自動 push パイプライン確認済み
- **Digital Ecosystem Builder**: obsidian-wiki へ統合、元 repo 削除完了

## RLS ポリシー設計における soft-delete の鉄則（2026-05-19確認済み）
- SELECT と WRITE は必ず分離する
  - SELECT: `deleted_at IS NULL` を USING に含める（論理削除行を自動除外）
  - WRITE: `deleted_at IS NULL` を含めない（soft-delete UPDATE が通るように）
  - **WRITE に `deleted_at IS NULL` を入れると soft-delete 時に 42501 エラー発生**
- customers / appointments 共通の 3 ポリシー構成（確定）
  - SELECT: `salon_id = get_salon_id() AND deleted_at IS NULL`
  - WRITE（INSERT/UPDATE/DELETE）: `salon_id = get_salon_id()` のみ
  - DELETE BLOCK（RESTRICTIVE）: `false`（hard-delete 完全防止）
- `get_salon_id()` は SECURITY DEFINER + `search_path = public, auth` 設定済み

## 運用ルール（git）
- **git コマンドは必ず `cd /home/osw-04/miki-salon` してから実行すること**。Claude Code の CWD は `/mnt/c/Users/osw-04`（Windows ユーザーホーム、別の git repo）になることが多い。そこで `git add -A` すると `NTUSER.DAT` / `Cookies` / `Desktop/` など大量の無関係ファイルが stage されてしまう。
