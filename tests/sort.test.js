const { quickSort, hoarePivot, bubbleSort, selectionSort, insertionSort } = require('../src/sort');

describe('Sorting Functions', () => {

  test('hoarePivot of empty array is undefined', () => {
    expect(hoarePivot([])).toEqual(undefined);
  });

  test('hoarePivot of array of size 1 is zero', () => {
    expect(hoarePivot([4])).toEqual(0);
  });

  test('hoarePivot of array', () => {
    const arr = [4, 6, 7, 2, 0, 1, 8];
    expect(hoarePivot(arr)).toEqual(2);
    expect(arr).toEqual([1, 0, 2, 7, 6, 4, 8]);
  });
  
  test('rigth hoarePivot of array', () => {
    const arr = [4, 8, 7, 2, 0, 1, 6];
    expect(hoarePivot(arr, undefined, undefined, 6)).toEqual(4);
    expect(arr).toEqual([4, 6, 1, 2, 0, 7, 8]);
  });

  test('rigth hoarePivot of array is max', () => {
    const arr = [4, 6, 7, 2, 0, 1, 8];
    expect(hoarePivot(arr, undefined, undefined, 8)).toEqual(6);
    expect(arr).toEqual([4, 6, 7, 2, 0, 1, 8]);
  });

  test('left hoarePivot of array', () => {
    const arr = [4, 8, 7, 2, 0, 1, 6];
    expect(hoarePivot(arr, undefined, undefined, 4)).toEqual(2);
    expect(arr).toEqual([1, 0, 2, 7, 8, 4, 6]);
  });

  test('left hoarePivot of array is min', () => {
    const arr = [0, 8, 7, 2, 4, 1, 6];
    expect(hoarePivot(arr, undefined, undefined, 0)).toEqual(0);
    expect(arr).toEqual([0, 8, 7, 2, 4, 1, 6]);
  });

  test('quickSort sorts empty array', () => {
    expect(quickSort([])).toEqual([]);
  });

  test('quickSort sorts array of size 1', () => {
    expect(quickSort([1])).toEqual([1]);
  });

  test('quickSort sorts the array correctly', () => {
    expect(quickSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
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
