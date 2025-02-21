import Image from "next/image"

export default function Home() {
  const images = [
    "/images/gallery/DSC_2844.JPG",
    "/images/gallery/DSC07886.jpeg",
    "/images/gallery/DSC09781-2.jpg",
    "/images/gallery/DSCF1248.JPG",
    "/images/gallery/DSCF1703.jpg",
    "/images/gallery/DSCF2681.JPG",
    "/images/gallery/DSCF3442.JPG",
    "/images/gallery/DSCF3642.jpg",
    "/images/gallery/DSCF6505.JPG",
    "/images/gallery/DSCF6513.JPG",
    "/images/gallery/DSCF9765.jpg",
    "/images/gallery/IMG_0731.jpg",
    "/images/gallery/IMG_0794.JPG",
    "/images/gallery/IMG_1015.JPG",
    "/images/gallery/IMG_1696.jpg",
    "/images/gallery/IMG_1964.JPG",
    "/images/gallery/IMG_1967.JPG",
    "/images/gallery/IMG_1994.JPG",
    "/images/gallery/IMG_2025.JPG",
    "/images/gallery/IMG_2046.JPG",
    "/images/gallery/IMG_2363.JPG",
    "/images/gallery/IMG_2364.JPG",
    "/images/gallery/IMG_2472.jpg",
    "/images/gallery/IMG_8182.JPG",
    "/images/gallery/IMG_8191.JPG",
    "/images/gallery/IMG_8787.JPG",
    "/images/gallery/IMG_9616.JPG",
  ]

  return (
    <div>
      <div className="relative w-full h-svh">
        <p className="p-4 text-slate-500 font-bold z-50 absolute select-none">youichiro&apos;s gallery</p>
        <Image
          src="/images/top/top.jpg"
          alt="top"
          priority
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
