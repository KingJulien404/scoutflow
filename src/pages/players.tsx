import React, { useEffect, useState } from "react";
import Nav from "../components/ui/nav";

type Player = {
  player: {
    name: string;
    age: number;
    nationality: string;
    photo: string;
  };
  statistics: any[];
};

export default function Players() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    fetch("/api/players")
      .then(res => res.json())
      .then(data => setPlayers(data.response));
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Nav />
      <main className="p-6">
        <h2 className="text-2xl mb-4">Top Players</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {players.map((p, i) => (
            <div key={i} className="bg-gray-900 p-4 rounded">
              <img src={p.player.photo} alt={p.player.name} className="w-16 h-16 rounded-full mb-2" />
              <h3 className="text-lg">{p.player.name}</h3>
              <p className="text-sm text-gray-400">{p.player.nationality}, Age {p.player.age}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}