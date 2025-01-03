const { pivot, bubbleSort, selectionSort, insertionSort } = require('../src/sort');

describe('Sorting Functions', () => {

  test('pivot of empty array is undefined', () => {
    expect(pivot([])).toEqual(undefined);
  });

  test('pivot of array of size 1 is zero', () => {
    expect(pivot([4])).toEqual(0);
  });

  test('pivot of array', () => {
    const arr = [4, 6, 7, 2, 0, 1, 8];
    expect(pivot(arr)).toEqual(2);
    expect(arr).toEqual([1, 0, 7, 2, 6, 4, 8]);
  });
  
  test('rigth pivot of array', () => {
    const arr = [4, 8, 7, 2, 0, 1, 6];
    expect(pivot(arr, undefined, undefined, 6)).toEqual(4);
    expect(arr).toEqual([4, 1, 0, 2, 7, 8, 6]);
  });

  test('rigth pivot of array is max', () => {
    const arr = [4, 6, 7, 2, 0, 1, 8];
    expect(pivot(arr, undefined, undefined, 8)).toEqual(6);
    expect(arr).toEqual([4, 6, 7, 2, 0, 1, 8]);
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
