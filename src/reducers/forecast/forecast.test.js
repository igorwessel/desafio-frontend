import { expect } from 'chai';
import forecast from '.';
import { UPDATE_FORECAST } from './actions';

it('capitals should be a function', () => {
  expect(forecast).to.be.a('function');
});

it('should action UPDATE_FORECAST update FORECAST', () => {
  const before = {
    forecast: {},
  };
  const action = {
    type: UPDATE_FORECAST,
    payload: {
      forecast: {
        atmosphere: {
          humidity: 92,
          pressure: 954,
          rising: 0,
          visibility: 13.8,
        },
        wind: {
          speed: 12,
        },
        condition: {
          temperature: 15,
        },
      },
    },
  };
  const after = {
    forecast: {
      atmosphere: {
        humidity: 92,
        pressure: 954,
        rising: 0,
        visibility: 13.8,
      },
      wind: {
        speed: 12,
      },
      condition: {
        temperature: 15,
      },
    },
  };

  expect(forecast(before, action)).to.be.deep.equal(after);
});
