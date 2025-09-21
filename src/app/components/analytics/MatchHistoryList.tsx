import React from 'react';
import MatchHistoryRow from './MatchHistoryRow';
import Pagination from '../ui/Pagination';
import { IMatchHistory } from '@/app/interfaces/match-history.interface';
import { IPagedQueryResult } from '@/app/interfaces/paged-query-result.interface';

interface MatchHistoryListProps {
  pagedMatches: IPagedQueryResult<IMatchHistory> | null;
  onPageChange: (page: number) => void;
}

export default function MatchHistoryList({
  pagedMatches,
  onPageChange
}: MatchHistoryListProps) {
  if (!pagedMatches || pagedMatches.items.length === 0)
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

      {pagedMatches.items.map((match) => (
        <MatchHistoryRow key={match.id} match={match} />
      ))}

      <Pagination
        currentPage={pagedMatches.pageNumber}
        totalItems={pagedMatches.totalItems}
        itemsPerPage={pagedMatches.pageSize}
        onPageChange={onPageChange}
      />
    </div>
  );
}
