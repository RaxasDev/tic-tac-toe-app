'use client';
import React from 'react';
import RankingRow from './RankingRow';
import { IPlayerRanking } from '@/app/interfaces/player-ranking.interface';

interface RankingListProps {
  players: IPlayerRanking[];
}

export default function RankingList({ players }: RankingListProps) {
  const noData = !players || !players.length;

  if (noData) {
    return (
      <div
        className="p-4 rounded-2xl shadow-md w-full h-full flex items-center justify-center text-gray-400"
        style={{
          background:
            'linear-gradient(145deg, hsl(220 15% 12%), hsl(220 15% 18%))',
        }}
      >
        Sem dados para apresentar
      </div>
    );
  }
  return (
    <div
      className="p-6 rounded-2xl shadow-md"
      style={{
        background:
          'linear-gradient(210deg, hsl(220 15% 12%), hsl(220 15% 18%))',
      }}
    >
      <h2 className="text-white text-lg font-semibold mb-2">
        Ranking - Top 5 Jogadores
      </h2>
      {players.map((player) => (
        <RankingRow key={player.position} player={player} />
      ))}
    </div>
  );
}
