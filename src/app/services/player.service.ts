import { IPlayerMatch } from '../interfaces/player-match.interface';
import { BASE_URL, request } from './custom-request.service';

const routePrefix = 'player';

export const playerService = {
  createPlayerMatch: (paylaod: IPlayerMatch) =>
    request(`${BASE_URL}/${routePrefix}/create-match`, {
      method: 'POST',
      body: JSON.stringify(paylaod),
    }),
};
