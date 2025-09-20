'use client';
import { useState } from 'react';
import VictoryChart from './VictoryChart';
import MatchesChart from './MatchesChart';
import RankingList from './RankingList';
import { IMatchHistory } from '@/app/interfaces/match-history.interface';
import MatchHistoryList from './MatchHistoryList';

export default function TabsSection() {
  const [active, setActive] = useState('Visão Geral');
  const tabs = ['Visão Geral', 'Ranking', 'Histórico'];

  const mockPlayers = [
    {
      position: 1,
      name: 'Guidera',
      matches: 1,
      bestMoves: 6,
      wins: 1,
      losses: 0,
      draws: 0,
      winRate: 100,
    },
    {
      position: 2,
      name: 'Raxas',
      matches: 5,
      bestMoves: 5,
      wins: 3,
      losses: 2,
      draws: 0,
      winRate: 60,
    },
    {
      position: 3,
      name: 'XXXX',
      matches: 4,
      bestMoves: 6,
      wins: 1,
      losses: 3,
      draws: 0,
      winRate: 25,
    },
    {
      position: 4,
      name: 'Raxasxxx',
      matches: 0,
      bestMoves: null,
      wins: 0,
      losses: 0,
      draws: 0,
      winRate: 0,
    },
    {
      position: 5,
      name: 'Raxasxxxx',
      matches: 0,
      bestMoves: null,
      wins: 0,
      losses: 0,
      draws: 0,
      winRate: 0,
    },
  ];

  const mockMatches: IMatchHistory[] = [
    {
      id: '1',
      playerX: 'Guidera',
      playerO: 'Raxas',
      winner: 'X',
      created: '2025-09-18 20:15',
    },
    {
      id: '2',
      playerX: 'XXXX',
      playerO: 'Raxas',
      winner: 'O',
      created: '2025-09-18 21:00',
    },
    {
      id: '3',
      playerX: 'Raxas',
      playerO: 'Raxasxxx',
      winner: 'Empate',
      created: '2025-09-19 10:30',
    },
  ];

  return (
    <div className="mt-6">
      <div
        className="flex space-x-4 p-2 rounded-lg justify-center"
        style={{
          background:
            'linear-gradient(145deg, hsl(220 15% 12%), hsl(220 15% 18%))',
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer ${
              active === tab
                ? 'bg-gray-700 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {active === 'Visão Geral' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <VictoryChart />
            <MatchesChart />
          </div>
        )}

        {active === 'Ranking' && <RankingList players={mockPlayers} />}

        {active === 'Histórico' && <MatchHistoryList matches={mockMatches} />}
      </div>
    </div>
  );
}
