import { expect } from 'chai';
import capitals from '.';

it('capitals should be a function', () => {
  expect(capitals).to.be.a('function');
});

it('should action UPDATE_CAPITALS update capitals', () => {
  const before = {
    capitals: [],
  };
  const action = {
    type: 'UPDATE_CAPITALS',
    payload: {
      capitals: [
        [{ city: 'Curitiba', low: 13, high: 22 }],
        [{ city: 'Salvador', low: 25, high: 26 }],
      ],
    },
  };
  const after = {
    capitals: [
      [{ city: 'Curitiba', low: 13, high: 22 }],
      [{ city: 'Salvador', low: 25, high: 26 }],
    ],
  };

  expect(capitals(before, action)).to.be.deep.equal(after);
});
