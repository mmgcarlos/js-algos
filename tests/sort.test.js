const { bubbleSort, selectionSort, insertionSort } = require('../src/sort');

describe('Sorting Functions', () => {

  test('pivot of empty array is undefined', () => {
    expect(pivot([])).toEqual(undefined);
  });
  
  test('bubbleSort sorts empty array', () => {
    expect(bubbleSort([])).toEqual([]);
  });

  test('bubbleSort sorts a size 1 array correctly', () => {
    expect(bubbleSort([5])).toEqual([5]);
  });
  
  test('bubbleSort sorts the array correctly', () => {
    expect(bubbleSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
  });

  test('selectionSort sorts empty array', () => {
    expect(selectionSort([])).toEqual([]);
  });

  test('selectionSort sorts a size 1 array correctly', () => {
    expect(selectionSort([5])).toEqual([5]);
  });

  test('selectionSort sorts the array correctly', () => {
    expect(selectionSort([10, 2, 6, 4])).toEqual([2, 4, 6, 10]);
  });

  test('insertionSort sorts empty array', () => {
    expect(insertionSort([])).toEqual([]);
  });

  test('insertionSort sorts a size 1 array correctly', () => {
    expect(insertionSort([5])).toEqual([5]);
  });

  test('insertionSort sorts the array correctly', () => {
    expect(insertionSort([10, 2, 6, 4])).toEqual([2, 4, 6, 10]);
  });
});
