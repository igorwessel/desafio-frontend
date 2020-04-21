import { UPDATE_FORECAST } from './actions';

export const updateForecast = (data) => ({
  type: UPDATE_FORECAST,
  payload: data,
});
