import { IMatchHistory } from '../interfaces/match-history.interface';
import { IPagedQueryResult } from '../interfaces/paged-query-result.interface';
import { BASE_URL, request } from './custom-request.service';

const routePrefix = 'analytics';

export const analyticsService = {
  getMatchesHistory: (
    pageNumber: number = 1,
    pageSize: number = 5
  ): Promise<IPagedQueryResult<IMatchHistory>> =>
    request<IPagedQueryResult<IMatchHistory>>(
      `${BASE_URL}/${routePrefix}/matches-history?pageNumber=${pageNumber}&pageSize=${pageSize}`
    ),

  getChartsData: () => request(`${BASE_URL}/${routePrefix}/charts-data`),

  getInfoCards: () => request(`${BASE_URL}/${routePrefix}/info-cards`),

  getRanking: () => request(`${BASE_URL}/${routePrefix}/ranking`),
};
