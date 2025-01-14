const { reverse } = require('../src/shiftRotateArray');

describe('Reverse array', () => {

  test('Reverse the empty array', () => {
    expect(reverse([])).toEqual([]);
  });

  test('Reverse array size 1', () => {
    expect(reverse([1])).toEqual([1]);
  });

  test('Reverse array', () => {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
  });

});
