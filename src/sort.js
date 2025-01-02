
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
  insertionSort
};
