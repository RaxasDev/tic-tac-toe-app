"use client";

import React, { useState } from "react";

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [score, setScore] = useState({ X: 0, O: 0 });

  const winnerInfo = calculateWinner(board);

  const handleClick = (index: number) => {
    if (board[index] || winnerInfo) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const newWinner = calculateWinner(newBoard);
    if (newWinner) {
      const w = newWinner.player as "X" | "O";
      setScore((prev) => ({ ...prev, [w]: prev[w] + 1 }));
    }
  };

  const resetBoard = () => setBoard(Array(9).fill(null));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Retângulo superior */}
      <div className="bg-white shadow-md rounded-md p-6 w-full max-w-lg mb-6 text-center">
        {!winnerInfo && (
          <p className="font-bold text-lg sm:text-xl">
            Próximo jogador: {isXNext ? "X" : "O"}
          </p>
        )}
        {winnerInfo && (
          <p className="font-bold text-lg sm:text-xl text-green-600">
            Vencedor: {winnerInfo.player}
          </p>
        )}
        <p className="mt-2 text-sm sm:text-base">
          Placar - X: {score.X} | O: {score.O}
        </p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-sm sm:text-base"
          onClick={resetBoard}
        >
          Reset
        </button>
      </div>

      {/* Grid do jogo da velha */}
      <div className="grid grid-cols-3 gap-3 w-full max-w-lg">
        {board.map((cell, idx) => {
          const isWinningSquare = winnerInfo?.line.includes(idx);
          return (
            <button
              key={idx}
              className={`aspect-square w-full flex items-center justify-center text-3xl sm:text-4xl font-bold shadow-md
                ${isWinningSquare ? "bg-green-200" : "bg-white"}
                hover:bg-gray-100`}
              onClick={() => handleClick(idx)}
            >
              {cell}
            </button>
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
