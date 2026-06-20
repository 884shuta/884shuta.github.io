# DEVELOPMENT

## ローカルでの起動方法

```bash
npm install
npm run dev
```

## ビルド確認

```bash
npm run build
npm run preview
```

## ファイル構成

- `src/main.tsx`: HashRouter を含むエントリーポイント
- `src/App.tsx`: ルーティング定義
- `src/data/works.ts`: 作品データと型定義
- `src/pages/Home.tsx`: トップページ
- `src/pages/WorkDetail.tsx`: 作品詳細ページ
- `src/components/*`: UI コンポーネント群
- `src/hooks/useScrollSway.ts`: スクロール時の微揺れ演出
- `src/styles/global.css`: Tailwind と全体スタイル
- `public/projects/`: 作品画像・PDF の配置先

## コンポーネント構成

- `Header`: ナビゲーション
- `Intro`: 導入と外部リンク
- `WorksBoard`: 作品一覧とカテゴリフィルター
- `WorkCard`: スクラップノート風カード
- `SkillCard`: スキル一覧カード
- `AchievementCard`: 実績カード
- `Footer`: フッター

## TypeScript の作品データ構造

`src/data/works.ts` では `Work` 型を定義し、以下の項目を配列で管理します。

- `slug`
- `title`
- `subtitle`
- `category`
- `period`
- `description`
- `techStack`
- `type`
- `thumbnail`
- `images`
- `slides`
- `githubUrl`
- `demoUrl`
- `documentUrl`
- `featured`
- `cardStyle`

`cardStyle` は `sticky` / `memo` / `polaroid` の 3 種類です。
