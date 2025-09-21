'use client';

import { RefreshCcw, Settings } from 'lucide-react';
import StatsGrid from '../components/analytics/StatsGrid';
import TabsSection from '../components/analytics/TabSelection';
import { useRouter } from 'next/navigation';
import { routes } from '../routes/routes';
import { useAnalytics } from '../hooks/use-analytics';
import { useEffect } from 'react';

export default function AnalyticsPage() {
  const router = useRouter();
  const redirectChoosePlayer = () => router.push(routes.choosePlayer);
  const {
    loading,
    matchesHistory,
    matchesPagination,
    chartsData,
    infoCards,
    ranking,
    fetchAll,
    fetchMatchesPage,
  } = useAnalytics();

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const handleUpdateAnalytics = () => {
    if (loading) return;

    fetchAll();
  };

  return (
    <div
      className="p-6 min-h-screen w-full"
      style={{
        background:
          'linear-gradient(145deg, hsl(220 15% 7%), hsl(220 15% 18%))',
      }}
    >
      <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
        <button
          onClick={redirectChoosePlayer}
          className="mb-4 flex items-center gap-2 px-4 py-2 text-white rounded-lg shadow 
        hover:bg-gray-700 transition-colors cursor-pointer"
          style={{
            background:
              'linear-gradient(145deg, hsl(220 15% 12%), hsl(220 15% 18%))',
          }}
        >
          <Settings size={18} />
          Escolher jogadores
        </button>

        <button
          onClick={handleUpdateAnalytics}
          className="mb-4 flex items-center gap-2 px-4 py-2 text-white rounded-lg shadow 
        hover:bg-gray-700 transition-colors cursor-pointer"
          style={{
            background:
              'linear-gradient(145deg, hsl(220 15% 12%), hsl(220 15% 18%))',
          }}
        >
          <RefreshCcw size={18} />
          Atualizar Estatísticas
        </button>
      </div>

      <h1
        className="text-4xl font-bold bg-clip-text text-transparent leading-[1.24]"
        style={{
          backgroundImage:
            'linear-gradient(135deg, hsl(260 100% 70%), hsl(200 100% 60%))',
        }}
      >
        Estatísticas do Jogo
      </h1>

      <p className="text-gray-400">Análise completa das partidas e jogadores</p>

      <StatsGrid infoCards={infoCards} loading={loading} />
      <TabsSection
        matchesHistory={matchesHistory}
        matchesPagination={matchesPagination}
        chartsData={chartsData}
        ranking={ranking}
        loading={loading}
        onMatchesPageChange={(page: number) => fetchMatchesPage(page, 5)}
      />
    </div>
  );
}
