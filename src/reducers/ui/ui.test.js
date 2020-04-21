import { expect } from 'chai';
import ui from '.';
import { OPEN_CARD_WEATHER } from './actions';

it('ui should be a function', () => {
  expect(ui).to.be.a('function');
});

it('should open card', () => {
  const before = {};
  const action = {
    type: OPEN_CARD_WEATHER,
    payload: {
      card_weather: true,
    },
  };
  const after = {
    card_weather: true,
  };
  expect(ui(before, action)).to.deep.equal(after);
});
