'use client';
import TicTacToe from '../components/TicTacToe';
import TicTacToeHeader from '../components/TicTacToeHeader';
import { useSearchParams } from 'next/navigation';
import { toast } from 'sonner';
import { useTicTacToe } from '../hooks/use-tic-tac-toe';

const BoardPage: React.FC = () => {
  const searchParams = useSearchParams();
  const playerX = searchParams.get('player-x');
  const playerO = searchParams.get('player-o');

  const handleInvalidPlayers = () => toast.error('Jogadores inválidos!');
  const game = useTicTacToe();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1d23] p-4">
      <div
        className="w-full max-w-md sm:min-w-[600px] bg-white shadow-md rounded-md p-6 mb-6 text-center flex flex-col items-center"
        style={{
          background:
            'linear-gradient(145deg, hsl(220 15% 22%), hsl(220 15% 28%))',
        }}
      >
        <TicTacToeHeader
          playerXId={playerX}
          playerOId={playerO}
          onInvalidPlayers={handleInvalidPlayers}
          board={game.board}
          isXNext={game.isXNext}
          winnerInfo={game.winnerInfo}
          resetBoard={game.resetBoard}
        />
      </div>

      <TicTacToe
        board={game.board}
        isXNext={game.isXNext}
        winnerInfo={game.winnerInfo}
        makeMove={game.makeMove}
      />
    </div>
  );
};

export default BoardPage;
