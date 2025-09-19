import { useState } from "react";
import { Board } from "../types/board.type";


export function useTicTacToe(initialBoard: Board = Array(9).fill(null)) {
	const [board, setBoard] = useState<Board>(initialBoard);
	const [isXNext, setIsXNext] = useState(true);

	const winnerInfo = calculateWinner(board);

	const makeMove = (index: number) => {
		if (board[index] || winnerInfo) return;
		const newBoard = [...board];
		newBoard[index] = isXNext ? "X" : "O";
		setBoard(newBoard);
		setIsXNext(!isXNext);
	};

	const resetBoard = () => setBoard(Array(9).fill(null));

	return { board, isXNext, winnerInfo, makeMove, resetBoard };
}

export function calculateWinner(squares: Board) {
	const lines = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8],
		[0, 3, 6], [1, 4, 7], [2, 5, 8],
		[0, 4, 8], [2, 4, 6],
	];

	for (const [a, b, c] of lines) {
		if (
			squares[a] &&
			squares[b] &&
			squares[c] &&
			squares[a] === squares[b] &&
			squares[a] === squares[c]
		) {
			return { player: squares[a], line: [a, b, c] };
		}
	}
	return null;
}