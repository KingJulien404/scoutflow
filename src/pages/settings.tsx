import React from "react";
import nav from "../components/ui/Nav";

export default function Settings() {
  return (
    <div className="bg-black text-white min-h-screen">
      <nav />
      <main className="p-10">
        <h2 className="text-2xl font-bold mb-4">Settings</h2>
        <p className="text-gray-400">Dark mode is enabled by default. More features coming soon.</p>
      </main>
    </div>
  );
}