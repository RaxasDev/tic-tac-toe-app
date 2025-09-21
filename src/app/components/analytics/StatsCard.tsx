'use client';
import { ReactNode } from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  color?: string;
  icon?: ReactNode;  
}

export default function StatsCard({
  title,
  value,
  icon,
  color,
}: StatsCardProps) {
  return (
    <div
      className="p-4 rounded-2xl shadow-md flex flex-col justify-between"
      style={{
        background:
          'linear-gradient(145deg, hsl(220 15% 12%), hsl(220 15% 18%))',
      }}
    >
      <div className="flex justify-between items-center">
        <span className="text-gray-400 text-sm">{title}</span>
        {icon && <span className={color}>{icon}</span>}
      </div>
      <span className="text-2xl font-bold text-white mt-2">{value}</span>
    </div>
  );
}
