import { useState, useCallback } from 'react';
import { analyticsService } from '../services/analytics.service';
import { IMatchHistory } from '../interfaces/match-history.interface';
import { IPlayerRanking } from '../interfaces/player-ranking.interface';
import { IChartsData } from '../interfaces/charts-data.interface';
import { IInfoCards } from '../interfaces/info-cards.interface';
import { IPagedQueryResult } from '../interfaces/paged-query-result.interface';

export function useAnalytics() {
  const [loading, setLoading] = useState(false);
  const [matchesHistory, setMatchesHistory] = useState<IMatchHistory[]>([]);
  const [matchesPagination, setMatchesPagination] =
    useState<IPagedQueryResult<IMatchHistory> | null>(null);
  const [chartsData, setChartsData] = useState<IChartsData | null>(null);
  const [infoCards, setInfoCards] = useState<IInfoCards | null>(null);
  const [ranking, setRanking] = useState<IPlayerRanking[]>([]);

  const fetchAll = useCallback(async () => {
    try {
      setLoading(true);
      const [mh, cd, ic, rk] = await Promise.all([
        analyticsService.getMatchesHistory(1, 5),
        analyticsService.getChartsData(),
        analyticsService.getInfoCards(),
        analyticsService.getRanking(),
      ]);
      setMatchesHistory(mh.items as IMatchHistory[]);
      setMatchesPagination(mh);
      setChartsData(cd as IChartsData);
      setInfoCards(ic as IInfoCards);
      setRanking(rk as IPlayerRanking[]);
    } catch (err) {
      console.error('Erro ao carregar analytics', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchMatchesPage = useCallback(
    async (pageNumber: number, pageSize: number = 5) => {
      try {
        setLoading(true);
        const data = await analyticsService.getMatchesHistory(
          pageNumber,
          pageSize
        );
        setMatchesHistory(data.items);
        setMatchesPagination(data);
      } catch (err) {
        console.error('Erro ao carregar página de matches', err);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return {
    loading,
    matchesHistory,
    matchesPagination,
    chartsData,
    infoCards,
    ranking,
    fetchAll,
    fetchMatchesPage,
  };
}
