import { useState, useEffect, useCallback } from 'react';
import { Board } from '../types/board.type';
import { EWinnerSide } from '../enum/winner-side.enum';
import { IPlayerMatch } from '../interfaces/player-match.interface';
import { playerService } from '../services/player.service';

interface UseTicTacToeProps {
  playerXName?: string | null;
  playerOName?: string | null;
}

export const useTicTacToe = ({
  playerXName,
  playerOName,
}: UseTicTacToeProps = {}) => {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [winnerInfo, setWinnerInfo] = useState<{
    player: 'X' | 'O';
    line: number[];
  } | null>(null);
  const [movementsX, setMovementsX] = useState<number>(0);
  const [movementsO, setMovementsO] = useState<number>(0);
  const [gameFinished, setGameFinished] = useState<boolean>(false);

  const sendGameDataToAPI = useCallback(async () => {
    try {
      const payload: IPlayerMatch = {
        playerXName: playerXName || 'Jogador X',
        playerOName: playerOName || 'Jogador O',
        movementsX,
        movementsO,
        winnerSide: winnerInfo
          ? winnerInfo.player === 'X'
            ? EWinnerSide.X
            : EWinnerSide.O
          : EWinnerSide.DRAW,
      };

      await playerService.createPlayerMatch(payload);
      console.log('Dados da partida enviados com sucesso');
    } catch (error) {
      console.error('Erro ao enviar dados da partida:', error);
    }
  }, [playerXName, playerOName, movementsX, movementsO, winnerInfo]);

  useEffect(() => {
    if ((winnerInfo || isBoardFull(board)) && !gameFinished) {
      setGameFinished(true);
      sendGameDataToAPI();
    }
  }, [winnerInfo, board, gameFinished, sendGameDataToAPI]);

  const calculateWinner = (
    board: Board
  ): { player: 'X' | 'O'; line: number[] } | null => {
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
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return { player: board[a] as 'X' | 'O', line: [a, b, c] };
      }
    }
    return null;
  };

  const isBoardFull = (board: Board): boolean => {
    return board.every((cell) => cell !== null);
  };

  const makeMove = useCallback(
    (index: number) => {
      if (board[index] || winnerInfo) return;

      const newBoard = [...board];
      newBoard[index] = isXNext ? 'X' : 'O';

      setBoard(newBoard);
      setIsXNext(!isXNext);

      if (isXNext) {
        setMovementsX((prev) => prev + 1);
      } else {
        setMovementsO((prev) => prev + 1);
      }

      const newWinnerInfo = calculateWinner(newBoard);
      if (newWinnerInfo) {
        setWinnerInfo(newWinnerInfo);
      }
    },
    [board, isXNext, winnerInfo]
  );

  const resetBoard = useCallback(() => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinnerInfo(null);
    setMovementsX(0);
    setMovementsO(0);
    setGameFinished(false);
  }, []);

  return {
    board,
    isXNext,
    winnerInfo,
    movementsX,
    movementsO,
    makeMove,
    resetBoard,
  };
};
