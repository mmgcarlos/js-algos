const { missingPair } = require('../src/missingPair');

describe('Find missing pair', () => {

  test('There are no missing pairs', () => {
    expect(missingPair([5, 9, 6, 6, 9, 5])).toEqual([]);
  });

  test('There are no missing pairs in []', () => {
    expect(missingPair([])).toEqual([]);
  });
});
