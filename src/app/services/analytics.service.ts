const BASE_URL = 'http://localhost:5000/api/v1/analytics';

async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Erro ${response.status}: ${response.statusText}`);
  }

  return response.json();
}

export const analyticsService = {
  getMatchesHistory: (pageNumber = 1, pageSize = 5) =>
    request(
      `${BASE_URL}/matches-history?pageNumber=${pageNumber}&pageSize=${pageSize}`
    ),

  getChartsData: () => request(`${BASE_URL}/charts-data`),

  getInfoCards: () => request(`${BASE_URL}/info-cards`),

  getRanking: () => request(`${BASE_URL}/ranking`),
};
