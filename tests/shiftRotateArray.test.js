const { reverse, rotate } = require('../src/shiftRotateArray');

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

describe('Rotate array', () => {

  test('Rotate the empty array', () => {
    expect(rotate([], 4)).toEqual([]);
  });

  test('Rotate array size 1', () => {
    expect(rotate([1], 4)).toEqual([1]);
  });

  test('Rotate 1 position', () => {
    expect(rotate([1, 2, 3], 1)).toEqual([3, 1, 2]);
  });

  test('Rotate 3 positions', () => {
    expect(rotate([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5, 1, 2]);
  });

});
