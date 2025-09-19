"use client";

import React, { useEffect, useState } from "react";
import { StringUtils } from "../utils/string.utils";
import { RefreshCw, Settings, BarChart2, Award, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { routes } from "../routes/routes";

interface ITicTacToeProps {
  playerXId?: string | null;
  playerOId?: string | null;
  onInvalidPlayers?: () => void;
}

const TicTacToe: React.FC<ITicTacToeProps> = ({
  playerXId,
  playerOId,
  onInvalidPlayers,
}) => {
  const router = useRouter();
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winnerInfo = calculateWinner(board);

  useEffect(() => {
    const isPlayerXValid = StringUtils.IsValidGuid(playerXId);
    const isPlayerOValid = StringUtils.IsValidGuid(playerOId);
    if (!isPlayerXValid || !isPlayerOValid) {
      onInvalidPlayers?.();
      return;
    }
  }, [playerXId, playerOId, onInvalidPlayers]);

  const handleClick = (index: number) => {
    if (board[index] || winnerInfo) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetBoard = () => setBoard(Array(9).fill(null));

  const choosePlayer = () => router.push(routes.choosePlayer);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1d23] p-4">
      <div
        className="w-full max-w-md sm:min-w-[600px] bg-white shadow-md rounded-md p-6 mb-6 text-center flex flex-col items-center"
        style={{
          background:
            "linear-gradient(145deg, hsl(220 15% 22%), hsl(220 15% 28%))",
        }}
      >
        <div className="font-bold text-lg sm:text-xl flex items-center justify-center gap-2 text-white">
          {!winnerInfo ? (
            <>
              <User size={18} className="text-white" />
              Vez de {isXNext ? playerXId || "X" : playerOId || "O"} (
              {isXNext ? "X" : "O"})
            </>
          ) : (
            <>
              <User size={18} className="text-white" />
              Vencedor: {winnerInfo.player}
              <Award size={18} className="text-yellow-400 ml-1" />
            </>
          )}
        </div>

        <p className="mt-2 text-sm sm:text-base text-white">
          Movimentos: {board.filter((c) => c !== null).length}
        </p>

        <div className="mt-4 flex flex-col gap-3 w-full max-w-[440px] sm:flex-row sm:justify-center">
          <button
            onClick={resetBoard}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white font-semibold 
               transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{
              background:
                "linear-gradient(145deg, hsl(220 15% 12%), hsl(220 15% 18%))",
            }}
          >
            <RefreshCw size={18} />
            Nova Partida
          </button>

          <button
            onClick={choosePlayer}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white font-semibold 
               transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{
              background:
                "linear-gradient(145deg, hsl(220 15% 12%), hsl(220 15% 18%))",
            }}
          >
            <Settings size={18} />
            Trocar Jogador
          </button>

          <button
            onClick={choosePlayer}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white font-semibold 
               transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{
              background:
                "linear-gradient(145deg, hsl(220 15% 12%), hsl(220 15% 18%))",
            }}
          >
            <BarChart2 size={18} />
            Estatísticas
          </button>
        </div>
      </div>

      <div className="w-full max-w-md sm:min-w-[600px] grid grid-cols-3 gap-3">
        {board.map((cell, idx) => {
          const isWinningSquare = winnerInfo?.line.includes(idx);
          return (
            <div
              key={idx}
              className={`rounded-lg transition-shadow duration-300 
                    ${winnerInfo ? "" : "group"}`}
              style={{
                boxShadow: isWinningSquare
                  ? "0 0 20px 5px rgba(0, 255, 0, 0.6)"
                  : "0 8px 15px rgba(0, 0, 0, 0.2)",
              }}
            >
              <button
                disabled={!!winnerInfo}
                className="group-hover:shadow-[0_0_20px_5px_rgba(128,0,128,0.6)] // sombra roxa no hover
                     aspect-square w-full flex items-center justify-center text-3xl sm:text-4xl font-bold
                     rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer disabled:cursor-not-allowed
                     disabled:opacity-70"
                style={{
                  background: isWinningSquare
                    ? "linear-gradient(135deg, hsl(120 100% 50%), hsl(60 100% 60%))"
                    : "linear-gradient(145deg, hsl(220 15% 12%), hsl(220 15% 18%))",
                  color:
                    cell === "X"
                      ? "hsl(0 85% 65%)"
                      : cell === "O"
                      ? "hsl(200 100% 60%)"
                      : "white",
                }}
                onClick={() => handleClick(idx)}
              >
                {cell}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Retorna { player, line } ou null
function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], line: [a, b, c] };
    }
  }

  return null;
}

export default TicTacToe;
