import { OPEN_CARD_WEATHER, CLOSE_CARD_WEATHER } from './actions';

export const openCardWeather = () => ({
  type: OPEN_CARD_WEATHER,
  payload: {
    card_weather: true,
  },
});

export const closeCardWeather = () => ({
  type: CLOSE_CARD_WEATHER,
  payload: {
    card_weather: false,
  },
});
