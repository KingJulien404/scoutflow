import React from "react";
import Nav from "../components/ui/Nav";

export default function Settings() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Nav />
      <main className="p-10">
        <h2 className="text-2xl mb-4">Settings</h2>
        <p className="text-sm text-gray-400">Dark mode is default. More settings coming soon.</p>
      </main>
    </div>
  );
}