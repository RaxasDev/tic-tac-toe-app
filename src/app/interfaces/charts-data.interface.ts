import { IMatchesPerDay } from './matches-per-day.interface';
import { IVictoryChart } from './victory-chart.interface';

export interface IChartsData {
  victoryData: IVictoryChart[];
  matchesPerDay: IMatchesPerDay[];
}
