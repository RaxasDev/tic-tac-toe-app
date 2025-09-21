'use client';
import React, { useEffect, useState } from 'react';
import { Users, X, Circle } from 'lucide-react';
import CustomInput from '../components/ui/Input';
import CustomButton from '../components/ui/button';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { routes } from '../routes/routes';
import { StringUtils } from '../utils/string.utils';

export default function ChoosePlayerPage() {
  const [playerX, setPlayerX] = useState('');
  const [playerO, setPlayerO] = useState('');
  const [errors, setErrors] = useState({ x: false, o: false });
  const router = useRouter();

  const handleStartGame = () => {
    const xEmpty = !playerX.trim();
    const oEmpty = !playerO.trim();

    if (xEmpty || oEmpty) {
      setErrors({ x: xEmpty, o: oEmpty });
      toast.error(
        'É necessário configurar os dois jogadores antes de iniciar o game!'
      );
      return;
    }

    if (StringUtils.normalize(playerX) === StringUtils.normalize(playerO)) {
      toast.error('Os jogadores X e O devem ser diferentes!');
      return;
    }

    const url = `/${routes.board}?player-x=${encodeURIComponent(
      playerX
    )}&player-o=${encodeURIComponent(playerO)}`;
    router.push(url);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#111317] text-white">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent leading-16">
          Configurar Jogadores
        </h1>
        <p className="mt-2 text-gray-300">
          Insira os nomes dos jogadores para começar
        </p>
      </div>

      <div className="w-full max-w-md sm:min-w-[600px] rounded-2xl bg-[#1a1d23] p-8 shadow-lg">
        <CustomInput
          label="Jogador"
          placeholder="Nome do Jogador X"
          color="text-red-500"
          value={playerX}
          onChange={(val) => {
            setPlayerX(val);
            if (val.trim()) setErrors((prev) => ({ ...prev, x: false }));
          }}
          error={errors.x}
          icon={<X className="text-red-500" size={20} />}
        />

        <div className="my-6 flex items-center justify-center">
          <div className="h-px w-1/3 bg-gray-700" />
          <div className="mx-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-400 opacity-20 text-purple-600">
            <Users size={20} />
          </div>
          <div className="h-px w-1/3 bg-gray-700" />
        </div>

        <CustomInput
          label="Jogador"
          placeholder="Nome do Jogador O"
          color="text-blue-400"
          value={playerO}
          onChange={(val) => {
            setPlayerO(val);
            if (val.trim()) setErrors((prev) => ({ ...prev, o: false }));
          }}
          error={errors.o}
          icon={<Circle className="text-blue-400" size={20} />}
        />

        <CustomButton onClick={handleStartGame}>
          <span>Iniciar Jogo</span>
        </CustomButton>
      </div>

      <p className="mt-6 text-sm text-gray-400">
        Os jogadores serão salvos automaticamente para futuras partidas
      </p>
    </div>
  );
}
