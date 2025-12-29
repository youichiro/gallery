import Image from "next/image";
import Link from "next/link";

export default function Top() {
  return (
    <div id="top" className="relative w-full h-svh">
      <Link href="/" className="p-4 text-slate-500 font-bold z-50 absolute">youichiro&apos;s gallery</Link>
      <Image
        src="/images/top/top.jpg"
        alt="top"
        priority={true}
        fill
        className="object-cover hidden sm:block"
      />
      <Image
        src="/images/top/top_mobile.jpg"
        alt="top"
        quality={100}
        priority
        fill
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
