"use client";

import { Board } from "../types/board.type";

interface Props {
  board: Board;
  isXNext: boolean;
  winnerInfo: { player: "X" | "O"; line: number[] } | null;
  makeMove: (index: number) => void;
}

const TicTacToe: React.FC<Props> = ({ board, winnerInfo, makeMove }) => {
  return (
    <div className="w-full max-w-md sm:min-w-[600px] grid grid-cols-3 gap-3">
      {board.map((cell, idx) => {
        const isWinningSquare = winnerInfo?.line.includes(idx);
        return (
          <div
            key={idx}
            className={`rounded-lg transition-shadow duration-300`}
            style={{
              boxShadow: isWinningSquare
                ? "0 0 20px 5px rgba(0, 255, 0, 0.6)"
                : "0 8px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            <button
              disabled={!!winnerInfo}
              className="aspect-square w-full flex items-center justify-center text-3xl sm:text-4xl font-bold
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
              onClick={() => makeMove(idx)}
            >
              {cell}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TicTacToe;
