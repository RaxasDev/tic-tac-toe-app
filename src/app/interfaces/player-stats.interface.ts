import { Player } from './player.interface';

export interface PlayerStats {
  player: Player;
  totalGames: number;
  wins: number;
  losses: number;
  draws: number;
  winRate: number;
  averageMoves: number;
  fastestWin: number | null;
}
