import React from "react";
import Link from "next/link";

export function Nav() {
  return (
    <nav className="w-full p-4 bg-black text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">ScoutFlow</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/players">Players</Link>
        <Link href="/compare">Compare</Link>
        <Link href="/settings">Settings</Link>
      </div>
    </nav>
  );
}
