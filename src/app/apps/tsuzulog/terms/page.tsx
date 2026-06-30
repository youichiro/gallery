import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約 | つづログ",
  description: "つづログの利用規約",
};

// つづログ の利用規約。紹介ページ（/apps/tsuzulog）に合わせた白ベースの配色。
// ※各条項の本文は雛形（プレースホルダ）。内容は後日確定して差し替える。
export default function TsuzulogTermsPage() {
  return (
    <main
      className="min-h-lvh w-full bg-white px-5 pt-6 pb-16 leading-[1.8] text-slate-700"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Hiragino Sans", "Noto Sans JP", sans-serif',
      }}
    >
      <div className="mx-auto max-w-[720px]">
        <Link
          href="/apps/tsuzulog"
          className="text-sm text-blue-600 transition hover:opacity-80"
        >
          ← つづログへ戻る
        </Link>

        <h1 className="mt-6 text-[1.6rem] font-bold text-slate-900">つづログ 利用規約</h1>
        <p className="mt-1 text-[0.9rem] text-slate-500">最終更新日：2026年6月30日</p>

        <p className="mt-6">
          本利用規約（以下「本規約」）は、「つづログ」（以下「本アプリ」）の利用条件を定めるものです。利用者は、本アプリを利用することで、本規約に同意したものとみなされます。
        </p>

        <h2 className="mt-8 border-b border-slate-200 pb-[0.3em] text-[1.15rem] font-bold text-slate-900">
          1. 適用
        </h2>
        <p className="mt-2">（ここに本文を記載）</p>

        <h2 className="mt-8 border-b border-slate-200 pb-[0.3em] text-[1.15rem] font-bold text-slate-900">
          2. 利用登録・アカウント
        </h2>
        <p className="mt-2">（ここに本文を記載）</p>

        <h2 className="mt-8 border-b border-slate-200 pb-[0.3em] text-[1.15rem] font-bold text-slate-900">
          3. 料金・サブスクリプション
        </h2>
        <p className="mt-2">（ここに本文を記載）</p>

        <h2 className="mt-8 border-b border-slate-200 pb-[0.3em] text-[1.15rem] font-bold text-slate-900">
          4. 禁止事項
        </h2>
        <p className="mt-2">（ここに本文を記載）</p>

        <h2 className="mt-8 border-b border-slate-200 pb-[0.3em] text-[1.15rem] font-bold text-slate-900">
          5. 本アプリの提供の停止・変更
        </h2>
        <p className="mt-2">（ここに本文を記載）</p>

        <h2 className="mt-8 border-b border-slate-200 pb-[0.3em] text-[1.15rem] font-bold text-slate-900">
          6. 免責事項
        </h2>
        <p className="mt-2">（ここに本文を記載）</p>

        <h2 className="mt-8 border-b border-slate-200 pb-[0.3em] text-[1.15rem] font-bold text-slate-900">
          7. 規約の変更
        </h2>
        <p className="mt-2">（ここに本文を記載）</p>

        <h2 className="mt-8 border-b border-slate-200 pb-[0.3em] text-[1.15rem] font-bold text-slate-900">
          8. 準拠法・裁判管轄
        </h2>
        <p className="mt-2">（ここに本文を記載）</p>

        <h2 className="mt-8 border-b border-slate-200 pb-[0.3em] text-[1.15rem] font-bold text-slate-900">
          9. お問い合わせ
        </h2>
        <p className="mt-2">
          本規約に関するお問い合わせは、以下までご連絡ください。
        </p>
        <p className="mt-1">
          <a href="mailto:cinnamon416@gmail.com" className="text-blue-600 hover:opacity-80">
            cinnamon416@gmail.com
          </a>
        </p>

        <footer className="mt-12 text-[0.85rem] text-slate-500">つづログ / Tsuzulog</footer>
      </div>
    </main>
  );
}
