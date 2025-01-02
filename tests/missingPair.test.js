const { missingPair } = require('../src/missingPair');

describe('Find missing pair', () => {

  test('There are no missing pairs', () => {
    expect(missingPair([5, 9, 6, 6, 9, 5])).toEqual([]);
  });

  test('There are no missing pairs in []', () => {
    expect(missingPair([])).toEqual([]);
  });

  test('Missing pair in array size 1', () => {
    expect(missingPair([5])).toEqual([5, 0]);
  });

  test('There is a missing pair', () => {
    expect(missingPair([5, 9, 6, 9, 5])).toEqual([6, 2]);
  });

  test('There is a missing at the end', () => {
    expect(missingPair([5, 4, 6, 4, 6, 5, 9])).toEqual([9, 6]);
  });

  test('There is a missing pair at the beginnig', () => {
    expect(missingPair([5, 6, 9, 9, 6])).toEqual([5, 0]);
  });

  test('There is a missing pair at the beginnig', () => {
    expect(missingPair([9, 6, 5, 9, 6])).toEqual([5, 2]);
  });
});
