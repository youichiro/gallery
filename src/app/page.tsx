import Image from "next/image";
import Link from "next/link";
import { imageUrl } from "./lib/imageUrl";

// トップページ。全画面のヒーロー画像を前面に出し、中央にギャラリーへの導線を置く。
// 画像は Top コンポーネント同様 sm: ブレークポイントで PC / モバイルを出し分ける。
export default function Home() {
  return (
    <div className="relative h-lvh w-full">
      <Image
        src={imageUrl("/top/images/top.jpg")}
        alt=""
        fill
        sizes="100vw"
        className="object-cover hidden sm:block"
      />
      <Image
        src={imageUrl("/top/images/top_mobile.jpg")}
        alt=""
        quality={100}
        fill
        sizes="100vw"
        className="object-cover sm:hidden"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-10 px-6 text-center">
        <div className="text-white drop-shadow-lg">
          <h1 className="text-3xl font-bold tracking-wide">youichiro</h1>
          <p className="mt-2 text-xs font-light tracking-widest text-white/70 sm:text-sm">Software Engineer</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Link
            href="/gallery"
            className="w-48 rounded-full border border-white/70 bg-black/20 px-10 py-3 text-center text-lg font-bold text-white backdrop-blur-sm transition hover:bg-black/40"
          >
            Gallery
          </Link>
          <Link
            href="/apps/tsuzulog"
            className="w-48 rounded-full border border-white/70 bg-black/20 px-10 py-3 text-center text-lg font-bold text-white backdrop-blur-sm transition hover:bg-black/40"
          >
            つづログ
          </Link>
        </div>
      </div>
    </div>
  );
}
