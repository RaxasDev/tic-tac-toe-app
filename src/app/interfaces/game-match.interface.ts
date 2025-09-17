import { Player } from "./player.interface";

export interface GameMatch {
	id: string;
	playerX: Player;
	playerO: Player;
	winner: 'X' | 'O' | 'draw';
	moves: number;
	duration: number;
	board: ('X' | 'O' | null)[];
	winningLine?: number[];
	playedAt: Date;
}