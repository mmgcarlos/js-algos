const pivot = (arr, low = 0, high = arr.length - 1, pivot) => {
  if (high === -1) {
    return undefined;
  }
  if (low >= high) {
    return low;
  }
  if (pivot === undefined) {
    pivot = arr[(low + high)/2];
  }
  let i = low ;
  let j = high;
  while (i < j) {
    while (arr[i] < pivot) { i++; }
    while (arr[j] >= pivot) { j--; }
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return i;
};

const quickSort = (arr, from = 0, to = arr.length - 1) => {
  if (from >= to) {
    return;
  }
  let pivotPos = pivot(arr, from, to);
  quickSort(arr, from, pivotPos - 1);
  quickSort(arr, pivotPos, to);
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
  pivot,
  quickSort
};
