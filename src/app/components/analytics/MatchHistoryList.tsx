'use client';
import React, { useState } from 'react';
import MatchHistoryRow from './MatchHistoryRow';
import { IMatchHistory } from '@/app/interfaces/match-history.interface';
import Pagination from '../ui/Pagination';
interface MatchHistoryListProps {
  matches: IMatchHistory[];
}

export default function MatchHistoryList({ matches }: MatchHistoryListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentMatches = matches.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div
      className="p-6 rounded-2xl shadow-md"
      style={{
        background:
          'linear-gradient(145deg, hsl(220 15% 12%), hsl(220 15% 18%))',
      }}
    >
      <h2 className="text-white text-lg font-semibold mb-4">
        Histórico de Partidas
      </h2>

      {matches.length > 0 ? (
        <>
          {currentMatches.map((match) => (
            <MatchHistoryRow key={match.id} match={match} />
          ))}

          <Pagination
            currentPage={currentPage}
            totalItems={matches.length}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
          />
        </>
      ) : (
        <p className="text-gray-400 text-sm">Nenhuma partida encontrada.</p>
      )}
    </div>
  );
}
