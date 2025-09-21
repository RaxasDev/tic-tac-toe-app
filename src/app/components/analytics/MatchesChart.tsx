'use client';
import { IMatchesPerDay } from '@/app/interfaces/matches-per-day.interface';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

interface MatchesChartProps {
  dataApi?: IMatchesPerDay[];
}

export default function MatchesChart({ dataApi }: MatchesChartProps) {
    console.log(dataApi);
  return (
    <div
      className="p-4 rounded-2xl shadow-md w-full"
      style={{
        background:
          'linear-gradient(145deg, hsl(220 15% 12%), hsl(220 15% 18%))',
      }}
    >
      <h2 className="text-white text-lg font-semibold mb-4">
        Partidas por Dia (Últimos 7 dias)
      </h2>
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dataApi}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="dateMatches" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1f2937',
                border: '1px solid #374151',
                borderRadius: '0.5rem',
              }}
            />
            <Bar dataKey="matches" fill="#a78bfa" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
