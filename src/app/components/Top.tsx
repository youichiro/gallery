import Image from "next/image";
import Link from "next/link";
import { imageUrl } from "../lib/imageUrl";

export default function Top() {
  return (
    <div id="top" className="relative w-full h-svh">
      <div className="z-50 absolute flex items-center text-slate-500 font-bold p-4 gap-2">
        <Link href="/" className="hover:text-slate-400">youichiro</Link>
        <p>/</p>
        <Link href="/gallery" className="hover:text-slate-400">gallery</Link>
      </div>
      <Image
        src={imageUrl("/gallery/images/top/top.jpg")}
        alt=""
        fill
        sizes="100vw"
        className="object-cover hidden sm:block"
      />
      <Image
        src={imageUrl("/gallery/images/top/top_mobile.jpg")}
        alt=""
        quality={100}
        fill
        sizes="100vw"
        className="object-cover sm:hidden"
      />
      <div className="absolute bottom-0 right-0 z-50 p-2">
        {/* chevron-double-down icon */}
        <a href="#tabs" className="text-slate-200 font-bold hover:text-slate-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
          </svg>
        </a>
      </div>
    </div>
  )
}
