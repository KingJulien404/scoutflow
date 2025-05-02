import * as React from "react";

export function Tabs({ tabs, currentTab, onTabChange }: { tabs: string[], currentTab: string, onTabChange: (tab: string) => void }) {
  return (
    <div className="flex border-b">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 -mb-px border-b-2 font-medium text-sm ${
            currentTab === tab ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500"
          }`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}