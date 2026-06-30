import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約 | つづログ",
  description: "つづログの利用規約",
};

// つづログ の利用規約。紹介ページ（/apps/tsuzulog）に合わせた白ベースの配色。
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
        <p className="mt-1 text-[0.9rem] text-slate-500">制定日：2026年6月30日</p>

        <p className="mt-6">
          この利用規約（以下「本規約」といいます）は、当方が提供するiOS向けアプリケーション「つづログ」（英語表記: Tsuzulog。以下「当アプリ」といいます）および当アプリに関連して提供する各種サービス（以下あわせて「本サービス」といいます）の利用条件を定めるものです。当アプリをご利用になる方（以下「ユーザー」といいます）は、本規約に同意のうえで本サービスをご利用ください。
        </p>
        <p className="mt-4">
          つづログは、日々の小さな「やったこと」を気軽に残し、その積み重ねを見返すための、私的でやわらかな記録帳です。本規約は、ユーザーに安心して使っていただくため、また当方が本サービスを継続的に提供するために必要なルールを定めるものであり、ユーザーを縛ったり責めたりすることを目的とするものではありません。
        </p>

        <h2 className="mt-8 border-b border-slate-200 pb-[0.3em] text-[1.15rem] font-bold text-slate-900">
          第1条（適用）
        </h2>
        <ol className="mt-2 list-decimal pl-[1.8em]">
          <li className="my-1">
            本規約は、本サービスの利用に関する当方とユーザーとの間の一切の関係に適用されます。
          </li>
          <li className="my-1">
            当方が本サービス上で別途定める個別のルール、注意事項、ガイドライン等（以下「個別規定」といいます）は、本規約の一部を構成します。本規約と個別規定が矛盾する場合は、個別規定が優先します。
          </li>
          <li className="my-1">
            本サービスにおける個人情報の取扱いについては、別途定めるプライバシーポリシー（
            <Link
              href="/apps/tsuzulog/privacy-policy"
              className="text-blue-600 hover:opacity-80"
            >
              https://youichiro.me/apps/tsuzulog/privacy-policy
            </Link>
            ）によります。本規約とあわせてご確認ください。
          </li>
        </ol>

        <h2 className="mt-8 border-b border-slate-200 pb-[0.3em] text-[1.15rem] font-bold text-slate-900">
          第2条（定義）
        </h2>
        <p className="mt-2">
          本規約において、次の各号の用語は、それぞれ当該各号に定める意味を有します。
        </p>
        <ol className="mt-2 list-decimal pl-[1.8em]">
          <li className="my-1">
            「コンテンツ」とは、ユーザーが本サービスを通じて作成・記録・投稿・保存する記録、文章、写真・画像、活動名その他一切の情報をいいます。
          </li>
          <li className="my-1">
            「シート」とは、記録をまとめる単位をいい、ひとりで使う個人シートと、招いたメンバーと共同で使う共有シートを含みます。
          </li>
          <li className="my-1">
            「Premium」とは、第6条に定める有料のサブスクリプション「つづログ Premium」をいいます。
          </li>
          <li className="my-1">「Apple」とは、Apple Inc. およびその子会社をいいます。</li>
        </ol>

        <h2 className="mt-8 border-b border-slate-200 pb-[0.3em] text-[1.15rem] font-bold text-slate-900">
          第3条（本規約への同意・未成年者の利用）
        </h2>
        <ol className="mt-2 list-decimal pl-[1.8em]">
          <li className="my-1">
            ユーザーは、本サービスを利用することにより、本規約に同意したものとみなされます。
          </li>
          <li className="my-1">
            ユーザーが未成年者である場合は、親権者など法定代理人の同意を得たうえで本サービスをご利用ください。Premiumの購入など本サービスに関する法律行為についても同様とします。
          </li>
        </ol>

        <h2 className="mt-8 border-b border-slate-200 pb-[0.3em] text-[1.15rem] font-bold text-slate-900">
          第4条（アカウント）
        </h2>
        <ol className="mt-2 list-decimal pl-[1.8em]">
          <li className="my-1">
            ユーザーは、AppleまたはGoogleのアカウントによるサインインを通じて、本サービスのアカウントを作成し、利用します。
          </li>
          <li className="my-1">
            ユーザーは、自己の責任においてアカウントを管理するものとし、これを第三者に利用させ、または貸与・譲渡してはなりません。
          </li>
          <li className="my-1">
            サインインに用いるApple ID・Googleアカウント等の認証情報の管理は、各提供事業者の定めに従うものとし、当方はその管理について責任を負いません。
          </li>
        </ol>

        <h2 className="mt-8 border-b border-slate-200 pb-[0.3em] text-[1.15rem] font-bold text-slate-900">
          第5条（本サービスの利用）
        </h2>
        <ol className="mt-2 list-decimal pl-[1.8em]">
          <li className="my-1">
            当方は、ユーザーに対し、本規約に従って本サービスを私的に利用する、譲渡不能かつ非独占的な権利を許諾します。
          </li>
          <li className="my-1">
            本サービスは、一部の機能を無料で、一部の機能をPremium（有料）で提供します。無料で利用できる範囲とPremiumで解放される範囲は、当アプリ内の表示によります。
          </li>
          <li className="my-1">
            ひとりで記録する基本的な体験（記録の作成・保存、自分の全履歴の閲覧、基本的な振り返りなど）は、無料で継続的にご利用いただけます。
          </li>
        </ol>

        <h2 className="mt-8 border-b border-slate-200 pb-[0.3em] text-[1.15rem] font-bold text-slate-900">
          第6条（つづログ Premium・サブスクリプション）
        </h2>
        <ol className="mt-2 list-decimal pl-[1.8em]">
          <li className="my-1">
            <span className="font-bold">内容：</span>
            Premiumは、家族など身近な方との共有、複数シートの作成、より自由な振り返り、エクスポートなど、当アプリ内で「Premium」として案内する機能をご利用いただける、自動更新型のサブスクリプションです。無料で利用できる範囲とPremiumで解放される範囲は、当アプリ内の表示によります。
          </li>
          <li className="my-1">
            <span className="font-bold">料金：</span>
            料金は次のとおりです（いずれも税込・日本ストアフロントの価格）。
            <ul className="mt-1 list-disc pl-[1.2em]">
              <li className="my-1">月額プラン：500円 / 月</li>
              <li className="my-1">年額プラン：4,800円 / 年</li>
            </ul>
            <p className="mt-1">
              料金は変更されることがあります。変更後の料金は、変更後に開始する更新期間から適用されます。
            </p>
          </li>
          <li className="my-1">
            <span className="font-bold">お支払い・自動更新：</span>
            お支払いは、購入確定時にユーザーのApple IDアカウントへ請求されます。サブスクリプションは、現在の期間の終了の24時間前までに解約しない限り自動的に更新され、更新時に同じ料金が請求されます。
          </li>
          <li className="my-1">
            <span className="font-bold">解約：</span>
            解約は、iPhoneの「設定 &gt; Apple アカウント &gt; サブスクリプション」からいつでも行うことができます。解約しても、すでに開始している期間の終了まではPremiumを引き続きご利用いただけます。期間途中の解約による日割りの返金は行われません。
          </li>
          <li className="my-1">
            <span className="font-bold">無料トライアル：</span>
            本規約の制定時点では、無料トライアルの提供はありません。将来提供する場合は、その条件を当アプリ内またはApp Storeにて表示します。
          </li>
          <li className="my-1">
            <span className="font-bold">返金：</span>
            App Storeを通じて購入されたサブスクリプションの返金は、Appleの定める返金ポリシーに従い、Appleが取り扱います。当方は、法令上必要な場合を除き、当方を通じた返金を行いません。
          </li>
          <li className="my-1">
            <span className="font-bold">オーナー課金・家族無料：</span>
            共有シートでは、そのシートの作成者（オーナー）が有効なPremiumを保有している場合、当該シートに招かれたメンバーは、追加の料金を支払うことなく、当該シート上でPremium機能を利用できます。一方、共有シートを新たに作成し、または他のメンバーを招待するには、ご自身が有効なPremiumを保有している必要があります。
          </li>
          <li className="my-1">
            <span className="font-bold">オーナー解約時の取扱い：</span>
            オーナーがPremiumを解約または失効した場合、当該共有シートのPremium機能は、メンバーを含めて利用できなくなることがあります。ただし、それまでに記録されたコンテンツ自体が削除されることはありません。
          </li>
          <li className="my-1">
            <span className="font-bold">ファミリー共有：</span>
            Premiumは、AppleのFamily Sharing（ファミリー共有）の対象とすることがあります。設定によっては、同一ファミリー内の他のApple IDでもPremiumをご利用いただける場合があります。
          </li>
        </ol>

        <h2 className="mt-8 border-b border-slate-200 pb-[0.3em] text-[1.15rem] font-bold text-slate-900">
          第7条（ユーザーのコンテンツ）
        </h2>
        <ol className="mt-2 list-decimal pl-[1.8em]">
          <li className="my-1">
            ユーザーが本サービスに記録・投稿したコンテンツに関する権利は、ユーザーに帰属します。当方は、ユーザーのコンテンツの著作権その他の権利を取得するものではありません。
          </li>
          <li className="my-1">
            当方は、本サービスの提供・維持・改善（コンテンツの保存・表示・同期・バックアップ、共有シートのメンバーへの表示、不具合の調査などを含みます）に必要な範囲に限り、ユーザーのコンテンツを利用できるものとします。当方が、この範囲を超えて広告その他の目的でユーザーのコンテンツを利用することはありません。
          </li>
          <li className="my-1">
            ユーザーは、自らが記録・投稿するコンテンツについて、これを記録・投稿する正当な権利を有していること、および第三者の権利を侵害しないことについて、自己の責任を負うものとします。
          </li>
          <li className="my-1">
            つづログは「記録は消すより残す」という考え方を大切にしており、当方が、ユーザーのコンテンツを正当な理由なく削除・改変することはありません。ただし、第9条（禁止事項）または法令に違反するコンテンツについては、この限りではありません。
          </li>
        </ol>

        <h2 className="mt-8 border-b border-slate-200 pb-[0.3em] text-[1.15rem] font-bold text-slate-900">
          第8条（共有機能）
        </h2>
        <ol className="mt-2 list-decimal pl-[1.8em]">
          <li className="my-1">
            共有シートは、ユーザーが招いた特定の少人数（家族・パートナーなど）と記録を分かち合うための、招待制の閉じた機能です。不特定多数に公開するための機能ではありません。
          </li>
          <li className="my-1">
            共有シートに記録・投稿したコンテンツ、および投稿者を示す情報（表示名・アイコンなど）は、当該シートのメンバーに表示されます。ユーザーは、誰を共有シートに招くか、どのような内容を共有するかについて、自己の責任で判断するものとします。
          </li>
          <li className="my-1">
            ユーザーは、共有シートにおいて、他のメンバーのプライバシーおよび権利を尊重するものとします。
          </li>
        </ol>

        <h2 className="mt-8 border-b border-slate-200 pb-[0.3em] text-[1.15rem] font-bold text-slate-900">
          第9条（禁止事項）
        </h2>
        <p className="mt-2">
          ユーザーは、本サービスの利用にあたり、次の各号の行為をしてはなりません。
        </p>
        <ol className="mt-2 list-decimal pl-[1.8em]">
          <li className="my-1">法令または公序良俗に違反する行為</li>
          <li className="my-1">犯罪行為に関連する行為</li>
          <li className="my-1">
            当方、他のユーザー、または第三者の権利（知的財産権、プライバシー、名誉など）を侵害する行為
          </li>
          <li className="my-1">
            他のユーザーまたは第三者に対する誹謗中傷、嫌がらせ、その他迷惑となる行為
          </li>
          <li className="my-1">
            本サービスの運営を妨害する行為、または本サービスのサーバーやネットワークに過度の負荷をかける行為
          </li>
          <li className="my-1">
            不正にアクセスする行為、または本サービスの脆弱性を悪用する行為
          </li>
          <li className="my-1">
            本サービスをリバースエンジニアリング、逆コンパイル、逆アセンブルする行為（適用法令により認められる場合を除きます）
          </li>
          <li className="my-1">
            本サービスまたはその利用権を、当方の許諾なく再販売・再配布・貸与する行為
          </li>
          <li className="my-1">その他、当方が不適切と合理的に判断する行為</li>
        </ol>

        <h2 className="mt-8 border-b border-slate-200 pb-[0.3em] text-[1.15rem] font-bold text-slate-900">
          第10条（知的財産権）
        </h2>
        <ol className="mt-2 list-decimal pl-[1.8em]">
          <li className="my-1">
            本サービス（当アプリのプログラム、デザイン、ロゴ、マスコット「つづペン」その他の表示を含みます）に関する知的財産権は、当方または正当な権利者に帰属します。ユーザーのコンテンツに関する権利は、この限りではありません（第7条）。
          </li>
          <li className="my-1">
            ユーザーは、本規約に基づき許諾された範囲を超えて、本サービスに関する権利を利用してはなりません。
          </li>
        </ol>

        <h2 className="mt-8 border-b border-slate-200 pb-[0.3em] text-[1.15rem] font-bold text-slate-900">
          第11条（プライバシー）
        </h2>
        <p className="mt-2">
          本サービスにおける個人情報および利用情報の取扱いについては、別途定めるプライバシーポリシー（
          <Link
            href="/apps/tsuzulog/privacy-policy"
            className="text-blue-600 hover:opacity-80"
          >
            https://youichiro.me/apps/tsuzulog/privacy-policy
          </Link>
          ）によります。ユーザーは、本サービスの利用にあたり、同ポリシーに従って情報が取り扱われることに同意するものとします。
        </p>

        <h2 className="mt-8 border-b border-slate-200 pb-[0.3em] text-[1.15rem] font-bold text-slate-900">
          第12条（本サービスの変更・中断・終了）
        </h2>
        <ol className="mt-2 list-decimal pl-[1.8em]">
          <li className="my-1">
            当方は、本サービスの内容を変更し、または提供を中断・終了することがあります。
          </li>
          <li className="my-1">
            当方は、保守、システム障害、その他やむを得ない事由により、ユーザーへの事前の通知なく本サービスの全部または一部の提供を中断することがあります。
          </li>
          <li className="my-1">
            当方が本サービスの提供を終了する場合は、可能な範囲で事前にユーザーへ告知するよう努め、ユーザーが自らのコンテンツを保全できるよう合理的に配慮します。
          </li>
        </ol>

        <h2 className="mt-8 border-b border-slate-200 pb-[0.3em] text-[1.15rem] font-bold text-slate-900">
          第13条（アカウントの停止・削除）
        </h2>
        <ol className="mt-2 list-decimal pl-[1.8em]">
          <li className="my-1">
            ユーザーは、当アプリ内の操作により、いつでもアカウントを削除することができます。アカウントを削除した場合、当方が定める範囲でユーザーのコンテンツおよびアカウント情報が削除されます。詳細はプライバシーポリシーによります。
          </li>
          <li className="my-1">
            ユーザーが本規約に違反した場合、当方は、当該ユーザーによる本サービスの利用を一時停止し、またはアカウントを削除することがあります。
          </li>
          <li className="my-1">
            有効なサブスクリプションがある状態でアカウントを削除しても、サブスクリプションの自動更新は自動的には停止しません。サブスクリプションの解約は、第6条第4項の方法によりApp Store側で行ってください。
          </li>
        </ol>

        <h2 className="mt-8 border-b border-slate-200 pb-[0.3em] text-[1.15rem] font-bold text-slate-900">
          第14条（免責事項・無保証）
        </h2>
        <ol className="mt-2 list-decimal pl-[1.8em]">
          <li className="my-1">
            当方は、本サービスが、特定の目的への適合性、正確性、有用性、完全性、または継続的・安定的に利用できることを保証するものではありません。本サービスは「現状有姿」で提供されます。
          </li>
          <li className="my-1">
            ユーザーは、自らのコンテンツについて、必要に応じてバックアップ（エクスポート機能の利用を含みます）を行うものとします。当方は、通信環境・端末・外部サービスの不具合等によるコンテンツの消失・毀損について、第15条に定める範囲を超えて責任を負いません。
          </li>
          <li className="my-1">
            本サービスは、Apple、Google、Supabase、RevenueCatその他の外部サービスを利用しています。これら外部サービスの提供状況や不具合に起因する事象について、当方は責任を負いません。
          </li>
        </ol>

        <h2 className="mt-8 border-b border-slate-200 pb-[0.3em] text-[1.15rem] font-bold text-slate-900">
          第15条（責任の制限）
        </h2>
        <ol className="mt-2 list-decimal pl-[1.8em]">
          <li className="my-1">
            当方は、本サービスに関してユーザーに生じた損害について、当方の故意または重過失による場合を除き、責任を負いません。
          </li>
          <li className="my-1">
            前項にかかわらず当方が責任を負う場合であっても、当方が賠償する損害の範囲は、現実に生じた通常かつ直接の損害に限られ、特別の事情から生じた損害（当方が損害の発生を予見し、または予見し得た場合を含みます）、逸失利益および間接損害については責任を負いません。
          </li>
          <li className="my-1">
            有償のサービス（Premium）に関して当方が負う損害賠償の額は、当方の故意または重過失による場合を除き、ユーザーが当該損害の発生時点より遡って過去12か月間に当方関連のサブスクリプションについて実際に支払った金額を上限とします。
          </li>
          <li className="my-1">
            ユーザーが消費者契約法上の消費者にあたる場合、本条のうち、当方の損害賠償責任の全部を免除する部分、または当方の故意もしくは重過失による場合に責任の一部を免除する部分は、適用されません。この場合、当方は法令上許される範囲で責任を負います。
          </li>
        </ol>

        <h2 className="mt-8 border-b border-slate-200 pb-[0.3em] text-[1.15rem] font-bold text-slate-900">
          第16条（Apple App Store に関する特約）
        </h2>
        <p className="mt-2">
          本サービスはApple App Storeを通じて提供されるため、本条が適用されます。本条と本規約の他の条項が矛盾する場合、Appleとの関係においては本条が優先します。
        </p>
        <ol className="mt-2 list-decimal pl-[1.8em]">
          <li className="my-1">
            本規約は、ユーザーと当方との間でのみ締結されるものであり、Appleとの間で締結されるものではありません。本サービスおよびその内容について責任を負うのは当方のみであり、Appleではありません。
          </li>
          <li className="my-1">
            ユーザーへの当アプリの利用許諾は、App Storeの利用規約（Usage Rules）に定められた範囲で、ユーザーが所有または管理するApple製品上で当アプリを利用する、譲渡不能なものに限られます。
          </li>
          <li className="my-1">
            当アプリの保守およびサポートは当方が行うものとし、Appleはこれらの義務を負いません。
          </li>
          <li className="my-1">
            当アプリが適用される保証に適合しない場合、ユーザーはAppleに通知することができ、Appleはユーザーに対し当アプリの購入価格を返金することがあります。法令上許される最大限の範囲で、Appleは当アプリに関するその他一切の保証義務を負わず、保証の不適合に起因する請求・損失・責任・費用は当方が負うものとします。
          </li>
          <li className="my-1">
            ユーザーまたは第三者による当アプリに関する請求（製造物責任、法令への不適合、消費者保護関連法令に基づく請求、知的財産権の侵害に関する請求を含みます）については、当方が責任を負い、Appleは責任を負いません。
          </li>
          <li className="my-1">
            第三者が、当アプリまたはユーザーによる当アプリの利用が当該第三者の知的財産権を侵害すると主張した場合、当該請求の調査・防御・和解・履行については当方が責任を負います。
          </li>
          <li className="my-1">
            ユーザーは、(a) 米国政府による禁輸措置の対象国に所在せず、または同国に居住していないこと、(b) 米国政府の禁止対象当事者リストに掲載されていないことを、表明し保証します。
          </li>
          <li className="my-1">
            ユーザーは、本サービスの利用にあたり、適用される第三者の利用規約を遵守するものとします。
          </li>
          <li className="my-1">
            Appleおよびその子会社は、本規約の第三者受益者であり、ユーザーが本規約に同意した時点で、本規約をユーザーに対して行使する権利を有します。
          </li>
          <li className="my-1">
            本サービスに関するお問い合わせおよび苦情は、第18条に定める連絡先までお願いします。
          </li>
        </ol>

        <h2 className="mt-8 border-b border-slate-200 pb-[0.3em] text-[1.15rem] font-bold text-slate-900">
          第17条（本規約の変更）
        </h2>
        <ol className="mt-2 list-decimal pl-[1.8em]">
          <li className="my-1">
            当方は、必要と判断した場合、本規約を変更することがあります。
          </li>
          <li className="my-1">
            本規約を変更する場合、当方は、変更後の内容と効力発生日を、当アプリ内または本規約の掲載ページにて告知します。重要な変更については、適切な方法で周知するよう努めます。
          </li>
          <li className="my-1">
            変更後の効力発生日以降にユーザーが本サービスを利用した場合、ユーザーは変更後の本規約に同意したものとみなされます。
          </li>
        </ol>

        <h2 className="mt-8 border-b border-slate-200 pb-[0.3em] text-[1.15rem] font-bold text-slate-900">
          第18条（お問い合わせ）
        </h2>
        <p className="mt-2">
          本サービスおよび本規約に関するお問い合わせは、次の連絡先までお願いします。
        </p>
        <ul className="mt-2 list-disc pl-[1.2em]">
          <li className="my-1">
            メールアドレス：
            <a
              href="mailto:cinnamon416@gmail.com"
              className="text-blue-600 hover:opacity-80"
            >
              cinnamon416@gmail.com
            </a>
          </li>
        </ul>

        <h2 className="mt-8 border-b border-slate-200 pb-[0.3em] text-[1.15rem] font-bold text-slate-900">
          第19条（準拠法・裁判管轄）
        </h2>
        <ol className="mt-2 list-decimal pl-[1.8em]">
          <li className="my-1">本規約の準拠法は日本法とします。</li>
          <li className="my-1">
            本サービスまたは本規約に関して当方とユーザーとの間に生じた紛争については、訴額に応じて当方の所在地を管轄する地方裁判所または簡易裁判所を、第一審の専属的合意管轄裁判所とします。ただし、ユーザーが消費者契約法上の消費者にあたる場合の専属的合意管轄については、法令の定めるところによります。
          </li>
        </ol>

        <footer className="mt-12 text-[0.85rem] text-slate-500">つづログ / Tsuzulog</footer>
      </div>
    </main>
  );
}
