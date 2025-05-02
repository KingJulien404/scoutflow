import * as React from "react";

export function Switch({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <span className="mr-2 text-sm">Off</span>
      <input type="checkbox" className="hidden" checked={checked} onChange={onChange} />
      <div className="w-10 h-5 bg-gray-300 rounded-full shadow-inner">
        <div className={`w-5 h-5 bg-white rounded-full transform transition ${checked ? "translate-x-5" : ""}`} />
      </div>
      <span className="ml-2 text-sm">On</span>
    </label>
  );
}