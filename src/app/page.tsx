"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Top from "./components/Top";
import ExpandedImage from "./components/ExpandedImage";
import Gallery from "./components/Gallery";
import { images2024 } from "./data/images2024";
import { images2025 } from "./data/images2025";

type Tab = "2024" | "2025";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  // URLのクエリパラメータからタブを取得
  const initialTab: Tab = searchParams.get("year") === "2025" ? "2025" : "2024";
  const [selectedTab, setSelectedTab] = useState<Tab>(initialTab);

  // 表示する画像一覧
  const images = selectedTab === "2024" ? images2024 : images2025;

  const tabs: Tab[] = ["2024", "2025"];

  // タブ変更時にURLを更新
  const changeTab = (tab: Tab) => {
    setSelectedTab(tab);
    router.push(`?tab=${tab}`, { scroll: false });
  };

  return (
    <div>
      <Top />

      <div className="flex gap-1 px-4 py-8 sm:py-16">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => changeTab(tab)}
            className={`px-3 py-2 rounded-lg font-bold ${
              selectedTab === tab
                ? "underline text-slate-500"
                : "text-slate-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <Gallery images={images} onImageClick={(image) => setSelectedImage(image)} />

      {/* 選択中の画像があれば拡大表示する */}
      {selectedImage && (
        <ExpandedImage image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}

      <footer className="text-slate-500 px-4 pb-8 text-sm flex justify-end items-center">
        <p><a href="https://note.com/youichiroz" target="_blank" className="hover:underline">&copy; youichiro</a></p>
      </footer>
    </div>
  );
}
