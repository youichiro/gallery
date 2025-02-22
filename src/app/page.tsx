"use client";

import Image from "next/image"
import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "/images/gallery/DSC_2844.JPG",
    "/images/gallery/DSC07886.jpeg",
    "/images/gallery/DSC09781-2.jpg",
    "/images/gallery/DSCF1248.JPG",
    "/images/gallery/DSCF1703.jpg",
    "/images/gallery/DSCF2681.JPG",
    "/images/gallery/DSCF3442.JPG",
    "/images/gallery/DSCF6505.JPG",
    "/images/gallery/DSCF6513.JPG",
    "/images/gallery/DSCF9765.jpg",
    "/images/gallery/IMG_1015.JPG",
    "/images/gallery/IMG_1964.JPG",
    "/images/gallery/IMG_1967.JPG",
    "/images/gallery/IMG_1994.JPG",
    "/images/gallery/IMG_2025.JPG",
    "/images/gallery/IMG_2046.JPG",
    "/images/gallery/IMG_2363.JPG",
    "/images/gallery/IMG_2364.JPG",
    "/images/gallery/IMG_2472.jpg",
    "/images/gallery/IMG_8191.JPG",
    "/images/gallery/IMG_8787.JPG",
    "/images/gallery/IMG_9616.JPG",
  ]

  return (
    <div>
      <div id="top" className="relative w-full h-svh">
        <p className="p-4 text-slate-500 font-bold z-50 absolute select-none">youichiro&apos;s gallery</p>
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
          <a href="#gallery" className="text-slate-200 font-bold hover:text-slate-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
            </svg>
          </a>
        </div>
      </div>

      <div id="gallery" className="grid grid-cols-1 gap-4 px-4 my-16 py-16 min-[440px]:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <div key={index} className="relative w-full aspect-video overflow-hidden group">
            <Image
              src={image}
              alt={image}
              priority={false}
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          id="selected-image"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="selected"
              fill
              className="object-contain"
            />
            <button
              className="absolute top-2 right-2 text-slate-200 text-2xl p-2 cursor-pointer hover:text-slate-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      <footer className="text-slate-500 px-4 py-4 text-sm flex justify-end items-center">
        <p>&copy; <a href="https://github.com/youichiro" target="_blank" className="hover:underline">youichiro</a></p>
      </footer>
    </div>
  );
}
