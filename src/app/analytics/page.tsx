'use client';

import { ArrowLeft } from 'lucide-react';
import StatsGrid from '../components/analytics/StatsGrid';
import TabsSection from '../components/analytics/TabSelection';
import { useRouter } from 'next/navigation';
import { routes } from '../routes/routes';

export default function AnalyticsPage() {
  const router = useRouter();
  const redirectChoosePlayer = () => router.push(routes.choosePlayer);

  return (
    <div
      className="p-6 min-h-screen w-full"
      style={{
        background:
          'linear-gradient(145deg, hsl(220 15% 7%), hsl(220 15% 18%))',
      }}
    >
      <button
        onClick={redirectChoosePlayer}
        className="mb-4 flex items-center gap-2 px-4 py-2 text-white rounded-lg shadow 
      hover:bg-gray-700 transition-colors cursor-pointer"
        style={{
          background:
            'linear-gradient(145deg, hsl(220 15% 12%), hsl(220 15% 18%))',
        }}
      >
        <ArrowLeft size={18} />
        Voltar
      </button>

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

      <StatsGrid />
      <TabsSection />
    </div>
  );
}
