import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | つづログ",
  description: "つづログのプライバシーポリシー",
};

// つづログ のプライバシーポリシー。
// 元データ: github.com/youichiro/apps (tsuzulog/privacy-policy/index.html) のダーク配色を再現。
export default function TsuzulogPrivacyPolicyPage() {
  return (
    <main
      className="min-h-lvh w-full bg-[#1a1a1a] px-5 pt-6 pb-16 leading-[1.8] text-[#e6e6e6]"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Hiragino Sans", "Noto Sans JP", sans-serif',
      }}
    >
      <div className="mx-auto max-w-[720px]">
        <Link
          href="/apps/tsuzulog"
          className="text-sm text-[#4ea1ff] transition hover:opacity-80"
        >
          ← つづログへ戻る
        </Link>

        <h1 className="mt-6 text-[1.6rem] font-bold">つづログ プライバシーポリシー</h1>
        <p className="mt-1 text-[0.9rem] text-[#888]">最終更新日：2026年6月16日</p>

        <p className="mt-6">
          「つづログ」（以下「本アプリ」）は、利用者の個人情報を以下のとおり取り扱います。本アプリを利用することで、本ポリシーに同意したものとみなされます。
        </p>

        <h2 className="mt-8 border-b border-[rgba(128,128,128,0.3)] pb-[0.3em] text-[1.15rem] font-bold">
          1. 取得する情報
        </h2>
        <ul className="mt-2 list-disc pl-[1.2em]">
          <li className="my-1">
            <span className="font-bold">アカウント情報</span>：Apple または Google でのサインインを通じて取得する、メールアドレス・表示名・ユーザー識別子。
          </li>
          <li className="my-1">
            <span className="font-bold">利用者が作成するコンテンツ</span>：活動の記録、綴り（テキスト・画像）、シートやアクティビティの設定。
          </li>
        </ul>
        <p className="mt-2">
          広告識別子の取得や、利用者を横断的に追跡（トラッキング）するための情報収集は行いません。
        </p>

        <h2 className="mt-8 border-b border-[rgba(128,128,128,0.3)] pb-[0.3em] text-[1.15rem] font-bold">
          2. 利用目的
        </h2>
        <ul className="mt-2 list-disc pl-[1.2em]">
          <li className="my-1">本アプリの基本機能（記録の作成・保存・表示・共有、認証、アカウント管理）の提供。</li>
          <li className="my-1">不具合の調査および品質改善。</li>
        </ul>
        <p className="mt-2">
          取得した情報を広告配信や第三者へのデータ販売に利用することはありません。
        </p>

        <h2 className="mt-8 border-b border-[rgba(128,128,128,0.3)] pb-[0.3em] text-[1.15rem] font-bold">
          3. 外部サービス・データの保存先
        </h2>
        <ul className="mt-2 list-disc pl-[1.2em]">
          <li className="my-1">
            <span className="font-bold">Supabase</span>：データベース・ファイルストレージ・認証基盤として利用します。利用者のアカウント情報とコンテンツは、Supabase が管理するサーバー（東京リージョン）に保存されます。
          </li>
          <li className="my-1">
            <span className="font-bold">Apple / Google</span>：サインイン（認証）に利用します。
          </li>
        </ul>
        <p className="mt-2">
          通信はすべて HTTPS で暗号化され、データへのアクセスは行レベルセキュリティ（RLS）等により制御されます。
        </p>

        <h2 className="mt-8 border-b border-[rgba(128,128,128,0.3)] pb-[0.3em] text-[1.15rem] font-bold">
          4. 共有機能について
        </h2>
        <p className="mt-2">
          シートの共有は招待制の非公開共有です。共有された内容は、その招待を受けたメンバーにのみ表示されます。一般公開や不特定多数への公開は行いません。
        </p>

        <h2 className="mt-8 border-b border-[rgba(128,128,128,0.3)] pb-[0.3em] text-[1.15rem] font-bold">
          5. データの削除
        </h2>
        <p className="mt-2">
          本アプリの「設定 → アカウントを削除」から、利用者自身がいつでもアカウントと関連データ（記録・綴り・画像・プロフィール）を削除できます。削除は即時に行われ、取り消しはできません。
        </p>

        <h2 className="mt-8 border-b border-[rgba(128,128,128,0.3)] pb-[0.3em] text-[1.15rem] font-bold">
          6. 第三者提供
        </h2>
        <p className="mt-2">
          法令に基づく場合を除き、利用者の同意なく個人情報を第三者に提供することはありません。前項の外部サービスは、本アプリの機能提供のために必要な範囲でデータを処理する委託先です。
        </p>

        <h2 className="mt-8 border-b border-[rgba(128,128,128,0.3)] pb-[0.3em] text-[1.15rem] font-bold">
          7. お問い合わせ
        </h2>
        <p className="mt-2">
          本ポリシーおよび個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。
        </p>
        <p className="mt-1">
          <a href="mailto:cinnamon416@gmail.com" className="text-[#4ea1ff] hover:opacity-80">
            cinnamon416@gmail.com
          </a>
        </p>

        <h2 className="mt-8 border-b border-[rgba(128,128,128,0.3)] pb-[0.3em] text-[1.15rem] font-bold">
          8. 改定
        </h2>
        <p className="mt-2">
          本ポリシーは、必要に応じて改定されることがあります。重要な変更がある場合は、本アプリまたは本ページ上でお知らせします。
        </p>

        <footer className="mt-12 text-[0.85rem] text-[#888]">つづログ / Tsuzulog</footer>
      </div>
    </main>
  );
}
