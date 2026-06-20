# DEPLOYMENT

## GitHub Pages で公開する手順

1. リポジトリの `main` ブランチへ push します。
2. GitHub の `Settings > Pages > Source` を `GitHub Actions` に設定します。
3. `.github/workflows/deploy.yml` が自動で `npm ci` → `npm run build` → Pages deploy を実行します。

## GitHub Actions での自動デプロイ

このリポジトリでは以下の公式アクションを使用しています。

- `actions/configure-pages`
- `actions/upload-pages-artifact`
- `actions/deploy-pages`

権限は以下を付与しています。

- `contents: read`
- `pages: write`
- `id-token: write`

## HashRouter を採用している理由

GitHub Pages は SPA の任意パスをサーバー側で解決しないため、`/works/memory-glasses` のような直接アクセスは 404 になりやすくなります。`HashRouter` を使うことで `#/works/memory-glasses` の形になり、GitHub Pages 上でも安定して動作します。

## Vite の base path の変更方法

`vite.config.ts` では以下のように `PUBLIC_BASE_PATH` を読み取ります。

```ts
const base = process.env.PUBLIC_BASE_PATH || '/';
```

必要に応じて以下のように切り替えてください。

- ユーザーサイト: `/`
- プロジェクトサイト: `/<repository-name>/`

## ユーザーサイトとプロジェクトサイトの違い

- `username.github.io` のようなユーザーサイトはルート配下で公開されます。
- `username.github.io/repository-name/` のようなプロジェクトサイトはサブディレクトリ配下で公開されます。

このサイトでは `PUBLIC_BASE_PATH` を切り替え、CSS・画像・静的アセットが壊れないようにしています。

## PUBLIC_BASE_PATH の使い方

ローカルや CI で明示したい場合は環境変数を付けて実行します。

```bash
PUBLIC_BASE_PATH=/884shuta.github.io/ npm run build
```

デフォルトでは `/` が使われます。
