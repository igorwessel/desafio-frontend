import { createReducer } from '../create-reducer';
import { OPEN_CARD_WEATHER, CLOSE_CARD_WEATHER } from './actions';

const initialState = {};

const ui = createReducer(initialState, {
  [OPEN_CARD_WEATHER]: (state, action) => action.payload,
  [CLOSE_CARD_WEATHER]: (state, action) => action.payload,
});

export default ui;
