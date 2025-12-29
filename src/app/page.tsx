"use client";

import { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Top from "./components/Top";
import ExpandedImage from "./components/ExpandedImage";
import Gallery from "./components/Gallery";
import { images2024 } from "./data/images2024";
import { images2025 } from "./data/images2025";
import { Tab } from "./types";
import Tabs from "./components/Tabs";

export default function HomeWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  );
}

function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  // URLのクエリパラメータからタブを取得
  const initialTab: Tab = searchParams.get("tab") === "2025" ? "2025" : "2024";
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
      <Tabs tabs={tabs} selected={selectedTab} onClick={(tab) => changeTab(tab)} />
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
