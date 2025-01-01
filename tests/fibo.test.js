const { fibo, memoize } = require('../src/fibo');

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

describe('memoize function', () => {
  it('should compute the result for the first call and cache it', () => {
    const mockFn = jest.fn((x) => x * 2); // Mock function that multiplies by 2
    const memoizedFn = memoize(mockFn);

    // First call, should compute and cache result
    const result1 = memoizedFn(5);
    expect(result1).toBe(10);
    expect(mockFn).toHaveBeenCalledTimes(1); // Check that the mock function was called once

    // Second call with the same argument, should use cached result
    const result2 = memoizedFn(5);
    expect(result2).toBe(10);
    expect(mockFn).toHaveBeenCalledTimes(1); // Check that the mock function was still called once (memoized)
  });

  it('should compute the result for new arguments', () => {
    const mockFn = jest.fn((x) => x * 2); // Mock function
    const memoizedFn = memoize(mockFn);

    // First call with argument 5
    const result1 = memoizedFn(5);
    expect(result1).toBe(10);
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Call with different argument 6, should compute again and cache it
    const result2 = memoizedFn(6);
    expect(result2).toBe(12);
    expect(mockFn).toHaveBeenCalledTimes(2); // Function should be called twice
  });

  it('should use the cache for the same arguments', () => {
    const mockFn = jest.fn((x) => x * 3); // Mock function
    const memoizedFn = memoize(mockFn);

    // First call with argument 3
    const result1 = memoizedFn(3);
    expect(result1).toBe(9);
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Call with the same argument 3 again, should return the cached value
    const result2 = memoizedFn(3);
    expect(result2).toBe(9);
    expect(mockFn).toHaveBeenCalledTimes(1); // Ensure the function was not called again
  });

  it('should handle multiple arguments', () => {
    const mockFn = jest.fn((x, y) => x + y); // Mock function that adds two numbers
    const memoizedFn = memoize(mockFn);

    // Call with multiple arguments
    const result1 = memoizedFn(2, 3);
    expect(result1).toBe(5);
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Call with the same arguments (should return cached result)
    const result2 = memoizedFn(2, 3);
    expect(result2).toBe(5);
    expect(mockFn).toHaveBeenCalledTimes(1); // Should not call the function again

    // Call with different arguments
    const result3 = memoizedFn(4, 5);
    expect(result3).toBe(9);
    expect(mockFn).toHaveBeenCalledTimes(2); // Function should be called again
  });
});


