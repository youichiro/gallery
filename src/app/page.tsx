import Image from "next/image"

export default function Home() {
  const images = [
    "/images/DSC07886.jpeg",
    "/images/DSC09781-2.jpg",
    "/images/DSCF9765.jpg",
    "/images/IMG_8191.JPG",
  ]

  return (
    <div>
      <div className="relative w-full h-svh">
        <p className="p-4 text-slate-500 font-bold z-50 absolute select-none">youichiro&apos;s gallery</p>
        <Image
          src="/images/top.jpg"
          alt="top"
          priority
          fill
          className="object-cover hidden sm:block"
        />
        <Image
          src="/images/top_mobile.jpg"
          alt="top"
          quality={100}
          priority
          fill
          className="object-cover sm:hidden"
        />
        <div className="absolute bottom-0 right-0 z-50 text-slate-200 font-bold p-2">
          {/* chevron-double-down icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 px-4 py-32 min-[440px]:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <div key={index} className="relative w-full aspect-video">
            <Image
              src={image}
              alt={image}
              priority={false}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
