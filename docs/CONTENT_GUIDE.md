# CONTENT GUIDE

## 作品を追加する方法

1. `src/data/works.ts` の `works` 配列に作品オブジェクトを追加します。
2. `slug` は `#/works/:slug` に使われる一意の文字列にします。
3. `category`、`techStack`、`cardStyle` を設定します。

## 画像を追加する方法

- 画像は `public/projects/` 配下に配置します。
- 例: `public/projects/memory-glasses/cover.png`
- データ側では `/projects/memory-glasses/cover.png` のように記述します。

## スライド PDF を追加する方法

- PDF も `public/projects/` 配下に配置します。
- 例: `public/projects/business-contest/slides.pdf`
- `slides` または `documentUrl` にパスを設定します。

## cardStyle の使い分け

- `sticky`: 付箋風。短い説明や印象的な作品向け
- `memo`: メモ帳風。情報量が多い作品向け
- `polaroid`: 写真や画面の見た目を前面に出したい作品向け

## 素材がない場合

- 画像が存在しない場合は、スクラップノート風のプレースホルダーを表示します。
- 後から `public/projects/` に画像や PDF を追加するだけで差し替え可能です。
- 必要に応じて画像生成 AI で仮サムネイルや仮ビジュアルを作り、後から差し替える運用も想定しています。

## 今後の拡張

- `src/pages/WorkDetail.tsx` は簡易実装です。
- 作品詳細ページは今後、背景、課題、設計、実装、成果、学びなどを本格的に追加できる構成にしています。
