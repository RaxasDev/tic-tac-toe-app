'use client';
import { Gamepad2, Users, TrendingUp, Trophy } from 'lucide-react';
import StatsCard from './StatsCard';

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      <StatsCard
        title="Total de Partidas"
        value={5}
        icon={<Gamepad2 />}
        color="text-white"
      />
      <StatsCard
        title="Total de Jogadores"
        value={8}
        icon={<Users />}
        color="text-white"
      />
      <StatsCard
        title="Média de Movimentos"
        value={'6.2'}
        icon={<TrendingUp />}
        color="text-white"
      />
      <StatsCard
        title="Jogo Mais Rápido"
        value={'5 mov'}
        icon={<Trophy />}
        color="text-green-500"
      />
    </div>
  );
}
