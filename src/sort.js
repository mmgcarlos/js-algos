const lomutoPivot = (arr, low = 0, high = arr.length - 1, pivot) => {
  if (pivot === undefined) {
    pivot = arr[high];
  }
  let swapPos = low;
  for (let i = 0; i < high; i++) {
    if (pivot > arr[i]) {
      [arr[swapPos], arr[i]] = [arr[i], arr[swapPos]];
      swapPos++;
    }
    [arr[swapPos], arr[high]] = [arr[high], arr[swapPos]];
  }
  return swapPos;
};

const hoarePivot = (arr, low = 0, high = arr.length - 1, pivot) => {
  if (high === -1) {
    return undefined;
  }
  if (low >= high) {
    return low;
  }
  if (pivot === undefined) {
    pivot = arr[Math.floor((low + high) / 2)];
  }
  let i = low - 1;
  let j = high + 1;
  while (true) {
    do { i++; } while (arr[i] < pivot);
    do { j--; } while (arr[j] > pivot);
    if (i >= j) { return j; }
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};

const quickSort = (arr, from = 0, to = arr.length - 1, pivotFunc = hoarePivot) => {
  if (from < to) {
    let pivotPos = pivotFunc(arr, from, to);
    quickSort(arr, from, pivotPos);
    quickSort(arr, pivotPos + 1, to);
  }
  return arr;
};

const bubbleSort = (arr, from = 0, to = arr.length - 1) => {
  for (let j = to; j > from; j--) {
    let swap = false;
    for (let i = from; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swap = true;
      }
    }
    if (!swap) {
      return arr;
    }
  }
  return arr;
};

const selectionSort = (arr, from = 0, to = arr.length - 1) => {
  for (let i = from; i < to; i++) {
    let min = i;
    for (let j = i + 1; j <= to; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i],arr[min]] = [arr[min], arr[i]];
  }
  return arr;
};

const insertionSort = (arr, from = 0, to = arr.length - 1) => {
  for (let i = from; i < to; i++) {
    let tmp = arr[i + 1];
    let j = i;
    for (;j >= 0 && arr[j] > tmp; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = tmp;
  }
  return arr;
};

module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort,
  pivot: hoarePivot,
  hoarePivot,
  lomutoPivot,
  quickSort
};
