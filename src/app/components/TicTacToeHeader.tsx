"use client";
import { useMemo } from "react";
import { User, Award, RefreshCw, Settings, BarChart2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { routes } from "../routes/routes";
import { Board } from "../types/board.type";

interface Props {
  playerXId?: string | null;
  playerOId?: string | null;
  onInvalidPlayers?: () => void;
  board: Board;
  isXNext: boolean;
  winnerInfo: { player: "X" | "O"; line: number[] } | null;
  resetBoard: () => void;
}

const TicTacToeHeader: React.FC<Props> = ({
  playerXId,
  playerOId,
  onInvalidPlayers,
  board,
  isXNext,
  winnerInfo,
  resetBoard,
}) => {
  const router = useRouter();

  if (!playerXId || !playerOId) onInvalidPlayers?.();

  const buttons = [
    { icon: RefreshCw, text: "Nova Partida", onClick: resetBoard },
    {
      icon: Settings,
      text: "Trocar Jogador",
      onClick: () => router.push(routes.choosePlayer),
    },
    {
      icon: BarChart2,
      text: "Estatísticas",
      onClick: () => router.push(routes.choosePlayer),
    },
  ];

  const winnerSide = winnerInfo?.player;
  const winnerName = useMemo(() => {
    if (!winnerSide) return null;
    return winnerSide === "X"
      ? playerXId ?? "Jogador X"
      : playerOId ?? "Jogador O";
  }, [winnerSide, playerXId, playerOId]);

  return (
    <>
      <div className="font-bold text-lg sm:text-xl flex items-center justify-center gap-2 text-white">
        {!winnerInfo ? (
          <>
            <User size={18} className="text-white" />
            Vez de {isXNext ? playerXId ?? "X" : playerOId ?? "O"} (
            {isXNext ? "X" : "O"})
          </>
        ) : (
          <>
            <User size={18} className="text-white" />
            Vencedor: {winnerName}
            <Award size={18} className="text-yellow-400 ml-1" />
          </>
        )}
      </div>

      <p className="mt-2 text-sm sm:text-base text-white">
        Movimentos: {board.filter((c) => c !== null).length}
      </p>

      <div className="mt-4 flex flex-col gap-3 w-full max-w-[440px] sm:flex-row sm:justify-center">
        {buttons.map(({ icon: Icon, text, onClick }, idx) => (
          <button
            key={idx}
            onClick={onClick}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white font-semibold
                       transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{
              background:
                "linear-gradient(145deg, hsl(220 15% 12%), hsl(220 15% 18%))",
            }}
          >
            <Icon size={18} />
            {text}
          </button>
        ))}
      </div>
    </>
  );
};

export default TicTacToeHeader;
