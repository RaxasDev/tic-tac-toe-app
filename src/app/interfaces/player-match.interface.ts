import { EWinnerSide } from '../enum/winner-side.enum';

export interface IPlayerMatch {
  playerXName: string;
  playerOName: string;
  movementsX: number;
  movementsO: number;
  winnerSide: EWinnerSide;
}
