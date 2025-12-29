"use client";

import { useState } from "react";
import Top from "./components/Top";
import ExpandedImage from "./components/ExpandedImage";
import Gallery from "./components/Gallery";
import { images2024 } from "./data/images2024";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
