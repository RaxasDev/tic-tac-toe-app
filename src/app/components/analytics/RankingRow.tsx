'use client';
import { IPlayerRanking } from '@/app/interfaces/player-ranking.interface';
import React from 'react';

interface RankingRowProps {
  player: IPlayerRanking;
}

export default function RankingRow({ player }: RankingRowProps) {
  return (
    <div
      className="flex justify-between items-center p-4 rounded-xl mb-2"
      style={{
        background:
          'linear-gradient(145deg, hsl(220 15% 12%), hsl(220 15% 18%))',
      }}
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex items-center justify-center bg-purple-600 text-white rounded-full font-bold">
          {player.position}
        </div>
        <div>
          <p className="text-white font-semibold">{player.name}</p>
          <p className="text-gray-400 text-sm">
            {player.matches} partidas •{' '}
            {player.bestMoves ? `${player.bestMoves} mov melhor` : 'N/A'}
          </p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-green-500 font-bold text-lg">{player.winRate}%</p>
        <p className="text-gray-400 text-sm">
          {player.wins}V / {player.losses}D / {player.draws}E
        </p>
      </div>
    </div>
  );
}
