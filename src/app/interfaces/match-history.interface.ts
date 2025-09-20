export interface IMatchHistory {
  id: string;
  playerX: string;
  playerO: string;
  winner: 'X' | 'O' | 'Empate';
  created: string;
}
