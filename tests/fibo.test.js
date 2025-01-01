const { fibo } = require('../src/fibo');

describe('Fibonacci', () => {

  test('Fibo of 0 is 0', () => {
    expect(fibo(0)).toEqual(0);
  });

  test('Fibo of 1 is 1', () => {
    expect(fibo(1)).toEqual(1);
  });

  test('Fibo of 10 is 55', () => {
    expect(fibo(10)).toEqual(55);
  });
});
