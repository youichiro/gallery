"use client";

import { useState } from "react";
import Top from "./components/Top";
import ExpandedImage from "./components/ExpandedImage";
import Gallery from "./components/Gallery";

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
      <Top />
      <Gallery images={images} onImageClick={(image) => setSelectedImage(image)} />
      
      {/* 選択中の画像があれば拡大表示する */}
      {selectedImage && (
        <ExpandedImage image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}

      <footer className="text-slate-500 px-4 pb-8 text-sm flex justify-end items-center">
        {/* <p>&copy; <a href="https://github.com/youichiro" target="_blank" className="hover:underline">youichiro</a></p> */}
        <p>&copy; youichiro</p>
      </footer>
    </div>
  );
}
