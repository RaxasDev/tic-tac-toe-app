export interface GameState {
	board: ('X' | 'O' | null)[];
	currentPlayer: 'X' | 'O';
	winner: 'X' | 'O' | null;
	winningLine: number[] | null;
	gameOver: boolean;
	moveCount: number;
	startTime: Date | null;
}