"use client";

import { useState } from "react";
import Top from "./components/Top";
import ExpandedImage from "./components/ExpandedImage";
import Gallery from "./components/Gallery";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images2024 = [
    "/images/2024/DSC_2844.JPG",
    "/images/2024/DSC07886.jpeg",
    "/images/2024/DSC09781-2.jpg",
    "/images/2024/DSCF1248.JPG",
    "/images/2024/DSCF1703.jpg",
    "/images/2024/DSCF2681.JPG",
    "/images/2024/DSCF3442.JPG",
    "/images/2024/DSCF6505.JPG",
    "/images/2024/DSCF6513.JPG",
    "/images/2024/DSCF9765.jpg",
    "/images/2024/IMG_1015.JPG",
    "/images/2024/IMG_1964.JPG",
    "/images/2024/IMG_1967.JPG",
    "/images/2024/IMG_1994.JPG",
    "/images/2024/IMG_2025.JPG",
    "/images/2024/IMG_2046.JPG",
    "/images/2024/IMG_2363.JPG",
    "/images/2024/IMG_2364.JPG",
    "/images/2024/IMG_2472.jpg",
    "/images/2024/IMG_8191.JPG",
    "/images/2024/IMG_8787.JPG",
    "/images/2024/IMG_9616.JPG",
  ]

  return (
    <div>
      <Top />
      <Gallery images={images2024} onImageClick={(image) => setSelectedImage(image)} />
      
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
