# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 概要

個人の写真ギャラリー（youichiro's gallery）。Next.js 15 App Router、React 19、TypeScript、Tailwind CSS v3 で構築。Vercel にデプロイし、画像は `public/` 配下の静的アセットとして配信する。バックエンドやデータベースはなく、画像一覧はハードコードした TypeScript の配列で管理する。コードのコメントや一部の UI ラベルは日本語。

## コマンド

```bash
npm run dev     # ローカル開発サーバー（Turbopack）http://localhost:3000
npm run build   # 本番ビルド
npm run start   # 本番ビルドの配信
npm run lint    # ESLint（next/core-web-vitals + next/typescript）
```

テストフレームワークは設定されていない。

## アーキテクチャ

アプリ全体が単一のクライアントレンダリングページ（`src/app/page.tsx`、`"use client"`）で、URL のクエリパラメータを読むため `<Suspense>` でラップされている。`src/app/components/` 配下のコンポーネント構成は以下のとおり。

- `Top` — 全画面のヒーロー画像（Tailwind の `sm:` ブレークポイントで PC 用とモバイル用の画像を出し分ける）。
- `Tabs` — 年の切り替え。クリックすると `page.tsx` 側のコールバックを呼ぶ。
- `Gallery` — `next/image` のサムネイルをレスポンシブな CSS グリッドで表示。
- `ExpandedImage` — 全画面のライトボックス（モーダル）。`page.tsx` の `selectedImage` ステートで制御する。
- `ScrollButton` — 300px スクロールすると現れる、タブまで戻るボタン。

ステートは `page.tsx` が保持する。`selectedTab`（表示中の年）と `selectedImage`（ライトボックス）の 2 つ。選択中のタブは `router.push` で URL のクエリパラメータ `?tab=2024|2025` に同期され、共有・ブックマーク可能になっている。読み込み時には同じパラメータから `initialTab` を復元する。

### 画像データとレイアウトの規約

各年の写真は `src/app/data/images{年}.ts`（例: `images2025.ts`）に、public パスの順序付き `string[]` として定義する。ファイルの実体は `public/images/{年}/{landscape|vertical}/` 配下に置く。

画像の向きはメタデータではなく**パス文字列から判定**する。`Gallery.tsx` で `image.includes("vertical")` により、タイルを縦長（`aspect-[2/3] row-span-2`）にするか横長（`aspect-[3/2]`）にするかを決める。したがって写真は、グリッドのレイアウトを正しくするために `landscape/` か `vertical/` の正しい名前のサブディレクトリに置く必要がある。配列の順序が表示順になる。

### 新しい年を追加する

最も頻度の高い変更で、複数のファイルを連動して修正する必要がある。

1. `public/images/{年}/{landscape,vertical}/` 配下に画像ファイルを追加する。
2. `src/app/data/images{年}.ts` を作成し、`images{年}`（順序付きのパス配列）をエクスポートする。
3. `src/app/types.ts` の `Tab` ユニオン型に年を追加する。
4. `src/app/page.tsx` で、`tabs` 配列に追加し、`images` のセレクタを拡張し、`initialTab` のパース処理を更新する（現状は `"2025"` をデフォルトにハードコードし、`"2024"` のみを特別扱いしている）。
