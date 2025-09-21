'use client';
import { Gamepad2, Users, TrendingUp, Trophy } from 'lucide-react';
import StatsCard from './StatsCard';
import { IInfoCards } from '@/app/interfaces/info-cards.interface';

interface StatsGridProps {
  infoCards?: IInfoCards | null;
  loading: boolean;
}

export default function StatsGrid({ infoCards, loading }: StatsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      <StatsCard
        title="Total de Partidas"
        value={infoCards?.totalMatches ?? 0}
        icon={<Gamepad2 />}
        color="text-white"
      />
      <StatsCard
        title="Total de Jogadores"
        value={infoCards?.totalPlayers ?? 0}
        icon={<Users />}
        color="text-white"
      />
      <StatsCard
        title="Média de Movimentos"
        value={infoCards?.averageMovements ?? 0}
        icon={<TrendingUp />}
        color="text-white"
      />
      <StatsCard
        title="Jogo Mais Rápido"
        value={infoCards?.matchWithLessMovements ?? 0}
        icon={<Trophy />}
        color="text-green-500"
      />
    </div>
  );
}
