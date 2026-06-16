import { Tab } from "../types";

export default function Tabs({ tabs, selected, onClick }: { tabs: Tab[]; selected: Tab; onClick: (tab: Tab) => void }) {
  return (
    <div id="tabs" className="flex gap-1 px-4 py-8 sm:py-16">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onClick(tab)}
          className={`px-3 py-2 rounded-lg font-bold cursor-pointer ${
            selected === tab
              ? "underline text-slate-500"
              : "text-slate-400"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}