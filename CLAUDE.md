# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 概要

個人の写真ギャラリー（youichiro's gallery）。Next.js 16 App Router、React 19、TypeScript、Tailwind CSS v4 で構築。Vercel にデプロイする。画像は Cloudflare R2 に置き、`next/image` で最適化して配信する（リポジトリに画像は含めない）。バックエンドやデータベースはなく、画像一覧はビルド時に R2 を走査して自動生成する。コードのコメントや一部の UI ラベルは日本語。

ルートは 2 つ。`/`（`src/app/page.tsx`）はトップページで、全画面のヒーロー画像と `/gallery` への導線だけを置くシンプルなサーバーコンポーネント。`/gallery`（`src/app/gallery/page.tsx`）が写真ギャラリー本体。

## コマンド

```bash
npm run dev       # ローカル開発サーバー（Turbopack）http://localhost:3000
npm run manifest  # R2 を走査して src/app/data/images.json を再生成
npm run build     # 本番ビルド（prebuild で manifest を自動再生成）
npm run start     # 本番ビルドの配信
npm run lint      # ESLint（next/core-web-vitals + next/typescript）
```

テストフレームワークは設定されていない。

## アーキテクチャ

トップページ `src/app/page.tsx` は全画面ヒーロー（`sm:` ブレークポイントで PC 用 `top/images/top.jpg` とモバイル用 `top/images/top_mobile.jpg` を出し分ける）と、中央に置いたギャラリーへのリンクボタンだけのサーバーコンポーネント。

ギャラリー本体は単一のクライアントレンダリングページ（`src/app/gallery/page.tsx`、`"use client"`）で、URL のクエリパラメータを読むため `<Suspense>` でラップされている。`src/app/components/` 配下のコンポーネント構成は以下のとおり。

- `Top` — ギャラリーの全画面ヒーロー画像（Tailwind の `sm:` ブレークポイントで PC 用とモバイル用の画像を出し分ける）。ワードマークのリンク先は `/gallery`。
- `Tabs` — 年の切り替え。クリックすると `gallery/page.tsx` 側のコールバックを呼ぶ。
- `Gallery` — `next/image` のサムネイルをレスポンシブな CSS グリッドで表示。
- `ExpandedImage` — 全画面のライトボックス（モーダル）。`gallery/page.tsx` の `selectedImage` ステートで制御する。
- `ScrollButton` — 300px スクロールすると現れる、タブまで戻るボタン。

ステートは `gallery/page.tsx` が保持する。`selectedTab`（表示中の年）と `selectedImage`（ライトボックス）の 2 つ。選択中のタブは `router.push` で URL のクエリパラメータ `?tab={年}`（`/gallery?tab={年}`）に同期され、共有・ブックマーク可能になっている。読み込み時には同じパラメータから `initialTab`（無効な値なら最新年）を復元する。

### 画像データとレイアウト

画像は Cloudflare R2（バケット `youichiro-me`）の `gallery/images/{年}/...`（ギャラリーのヒーローは `gallery/images/top/`、トップページのヒーローは `top/images/`）に置く。ギャラリーの画像一覧は手で書かず、`scripts/generate-image-manifest.mjs` がビルド時（`prebuild`）に R2 の `gallery/images/` を走査して `src/app/data/images.json` を生成する。

- **配信元**: `src/app/lib/imageUrl.ts` が `NEXT_PUBLIC_IMAGE_BASE_URL`（R2 の公開 URL）を前置する。`next.config.ts` の `images.remotePatterns` も同じ URL から導出。
- **向き**: 実寸（EXIF の回転を考慮）から自動判定。`Gallery.tsx` は manifest の `vertical` フラグで縦長（`aspect-[2/3] row-span-2`）/横長（`aspect-[3/2]`）を切り替える（フォルダ名やパス文字列には依存しない）。
- **並び**: EXIF の撮影日時（古い順）。
- **年タブ**: `gallery/images/{年}/` の prefix から自動生成。

`src/app/data/images.json` はコミットされており、R2 認証情報が無い環境では再生成せずこれをそのまま使う（ビルドは壊れない）。トップページのヒーロー（`top/images/`）は manifest 対象外で、`src/app/page.tsx` が `imageUrl()` で直接参照する。

### 新しい写真・年を追加する

1. Cloudflare R2 の `gallery/images/{年}/` に画像をアップロードする（`landscape`/`vertical` の振り分けは不要。向き・並びは自動）。
2. Vercel で再デプロイする（Deployments → Redeploy、または Deploy Hook）。`prebuild` が R2 を再走査して `images.json` を更新し、新しい写真・年が反映される。

コードの編集は不要。ビルド時に R2 を一覧するため、Vercel に `R2_ACCOUNT_ID` / `R2_ACCESS_KEY_ID` / `R2_SECRET_ACCESS_KEY` / `R2_BUCKET` と `NEXT_PUBLIC_IMAGE_BASE_URL` が設定されている必要がある。
