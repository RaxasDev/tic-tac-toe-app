"use client";
import TicTacToe from "../components/TicTacToe";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

const BoardPage: React.FC = () => {
  const searchParams = useSearchParams();
  const playerX = searchParams.get("player-x");
  const playerO = searchParams.get("player-o");

  const handleInvalidPlayers = () => {
    toast.error("Jogadores inválidos!");
  };

  return (
    <TicTacToe
      onInvalidPlayers={handleInvalidPlayers}
      playerXId={playerX}
      playerOId={playerO}
    />
  );
};

export default BoardPage;
