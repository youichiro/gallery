"use client";

import { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Top from "./components/Top";
import ExpandedImage from "./components/ExpandedImage";
import Gallery from "./components/Gallery";
import imagesByYear from "./data/images.json";
import { GalleryImage, Tab } from "./types";
import Tabs from "./components/Tabs";
import ScrollToTabsButton from "./components/ScrollButton";

// 年（タブ）は manifest から自動生成する。新しい年を先頭に。
const tabs: Tab[] = Object.keys(imagesByYear).sort().reverse();

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

  // URLのクエリパラメータからタブを取得（無効な値はデフォルト=最新年）
  const tabParam = searchParams.get("tab");
  const initialTab: Tab = tabParam && tabs.includes(tabParam) ? tabParam : tabs[0];
  const [selectedTab, setSelectedTab] = useState<Tab>(initialTab);

  // 表示する画像一覧
  const images = (imagesByYear[selectedTab as keyof typeof imagesByYear] ?? []) as GalleryImage[];

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
      <ScrollToTabsButton />

      {/* 選択中の画像があれば拡大表示する */}
      {selectedImage && (
        <ExpandedImage image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}

      <footer className="text-slate-500 px-4 pb-8 text-sm flex justify-start items-center">
        <p><a href="https://note.com/youichiroz" target="_blank" className="hover:underline">&copy; youichiro</a></p>
      </footer>
    </div>
  );
}
