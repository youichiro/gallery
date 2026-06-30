import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "つづログ | youichiro",
  description: "つづログの紹介ページ",
};

// つづログ アプリの紹介ページ（暫定）。内容は後から更新する。
export default function TsuzulogPage() {
  return (
    <main className="flex min-h-lvh w-full flex-col items-center justify-center gap-8 px-6 text-center text-slate-700">
      <div>
        <h1 className="text-3xl font-bold tracking-wide">つづログ</h1>
        <p className="mt-3 text-sm font-light tracking-widest text-slate-500">準備中です</p>
      </div>
      <p className="max-w-md text-sm leading-relaxed text-slate-600">
        つづログの紹介ページは準備中です。内容は順次追加していきます。
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
        <Link
          href="/apps/tsuzulog/privacy-policy"
          className="rounded-full border border-slate-300 px-6 py-2 font-bold text-slate-700 transition hover:bg-slate-100"
        >
          プライバシーポリシー
        </Link>
        <Link
          href="/apps/tsuzulog/terms"
          className="rounded-full border border-slate-300 px-6 py-2 font-bold text-slate-700 transition hover:bg-slate-100"
        >
          利用規約
        </Link>
        <Link
          href="/"
          className="rounded-full border border-slate-300 px-6 py-2 font-bold text-slate-700 transition hover:bg-slate-100"
        >
          ホームへ戻る
        </Link>
      </div>
    </main>
  );
}
