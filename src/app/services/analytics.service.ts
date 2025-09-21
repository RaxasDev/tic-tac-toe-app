import { BASE_URL, request } from './custom-request.service';

const routePrefix = 'analytics';

export const analyticsService = {
  getMatchesHistory: (pageNumber = 1, pageSize = 5) =>
    request(
      `${BASE_URL}/${routePrefix}/matches-history?pageNumber=${pageNumber}&pageSize=${pageSize}`
    ),

  getChartsData: () => request(`${BASE_URL}/${routePrefix}/charts-data`),

  getInfoCards: () => request(`${BASE_URL}/${routePrefix}/info-cards`),

  getRanking: () => request(`${BASE_URL}/${routePrefix}/ranking`),
};
