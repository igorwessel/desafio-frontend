import { createReducer } from '../create-reducer';
import { UPDATE_FORECAST } from './actions';

const initialState = {};

const forecast = createReducer(initialState, {
  [UPDATE_FORECAST]: (state, action) => action.payload,
});

export default forecast;
