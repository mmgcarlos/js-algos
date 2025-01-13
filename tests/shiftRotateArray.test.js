const { reverse } = require('../src/shiftRotateArray');

describe('Reverse array', () => {

  test('Reverse the empty array', () => {
    expect(reverse([])).toEqual([]);
  });

});
