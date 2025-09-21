'use client';
import { useState } from 'react';
import VictoryChart from './VictoryChart';
import MatchesChart from './MatchesChart';
import RankingList from './RankingList';
import { IMatchHistory } from '@/app/interfaces/match-history.interface';
import MatchHistoryList from './MatchHistoryList';
import { IChartsData } from '@/app/interfaces/charts-data.interface';
import { IPlayerRanking } from '@/app/interfaces/player-ranking.interface';

interface TabsSectionProps {
  matchesHistory: IMatchHistory[];
  chartsData: IChartsData | null;
  ranking: IPlayerRanking[];
  loading: boolean;
}

export default function TabsSection({
  matchesHistory,
  chartsData,
  ranking,
  loading
}: TabsSectionProps) {
  const [active, setActive] = useState('Visão Geral');
  const tabs = ['Visão Geral', 'Ranking', 'Histórico'];

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
            <VictoryChart dataApi={chartsData?.victoryData} />
            <MatchesChart dataApi={chartsData?.matchesPerDay} />
          </div>
        )}

        {active === 'Ranking' && <RankingList players={ranking} />}

        {active === 'Histórico' && (
          <MatchHistoryList matches={matchesHistory} />
        )}
      </div>
    </div>
  );
}
