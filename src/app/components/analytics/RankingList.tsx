'use client';
import React from 'react';
import RankingRow from './RankingRow';
import { IPlayerRanking } from '@/app/interfaces/player-ranking.interface';

interface RankingListProps {
  players: IPlayerRanking[];
}

export default function RankingList({ players }: RankingListProps) {
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
