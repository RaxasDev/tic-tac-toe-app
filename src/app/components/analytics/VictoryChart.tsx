'use client';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jogador X', value: 60, color: '#ef4444' },
  { name: 'Jogador O', value: 40, color: '#3b82f6' },
  { name: 'Empates', value: 0, color: '#9ca3af' },
];

export default function VictoryChart() {
  return (
    <div
      className="p-4 rounded-2xl shadow-md w-full h-full"
      style={{
        background:
          'linear-gradient(145deg, hsl(220 15% 12%), hsl(220 15% 18%))',
      }}
    >
      <h2 className="text-white text-lg font-semibold mb-4 text-center">
        Distribuição de Vitórias
      </h2>
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              innerRadius={60}
              dataKey="value"
              label={({ name, percent }) =>
                `${name}: ${((percent as number) * 100).toFixed(0)}%`
              }
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => [`${value}%`, 'Valor']}
              contentStyle={{
                backgroundColor: '#1f2937',
                border: '1px solid #374151',
                borderRadius: '0.5rem',
                color: '#f3f4f6',
              }}
            />
            <Legend
              wrapperStyle={{
                fontSize: '0.75rem',
                color: '#f3f4f6',
                paddingTop: '15px',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
