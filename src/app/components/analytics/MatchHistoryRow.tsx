'use client';
import { IMatchHistory } from '@/app/interfaces/match-history.interface';
import { DateUtils } from '@/app/utils/Date.utils';
import React from 'react';

interface MatchHistoryRowProps {
  match: IMatchHistory;
}

export default function MatchHistoryRow({ match }: MatchHistoryRowProps) {
  return (
    <div className="flex justify-between items-center bg-gray-600 p-4 rounded-xl mb-2">
      <div>
        <p className="text-white font-semibold">
          {match.playerX} <span className="text-red-400">(X)</span>
        </p>
        <p className="text-white font-semibold">
          {match.playerO} <span className="text-blue-400">(O)</span>
        </p>
      </div>

      <div className="text-center">
        <p className="text-gray-400 text-sm">Vencedor</p>
        <p
          className={`font-bold ${
            match.winner === 'X'
              ? 'text-red-400'
              : match.winner === 'O'
              ? 'text-blue-400'
              : 'text-gray-400'
          }`}
        >
          {match.winner}
        </p>
      </div>

      <div className="text-right text-gray-400 text-sm">
        {DateUtils.formatDate(match.created)}
      </div>
    </div>
  );
}
