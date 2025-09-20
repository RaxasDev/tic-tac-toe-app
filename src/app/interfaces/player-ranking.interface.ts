export interface IPlayerRanking {
  position: number;
  name: string;
  matches: number;
  bestMoves?: number | null;
  wins: number;
  losses: number;
  draws: number;
  winRate: number;
}
