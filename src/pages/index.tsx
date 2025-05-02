import React from "react";
import Nav from "../components/ui/nav";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Nav />
      <main className="flex flex-col items-center justify-center h-[80vh] px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">⚽ ScoutFlow</h1>
        <p className="text-lg sm:text-xl text-gray-400">
          Your all-in-one scouting platform — compare, track, and export players with real-time data.
        </p>
      </main>
    </div>
  );
}
