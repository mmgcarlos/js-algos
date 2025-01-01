const bubbleSort = (arr, from = 0, to = arr.length - 1) => {
  for (let j = to; j > from; j--) {
    for (let i = from; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }
  return arr;
};

const selectionSort = (arr, from = 0, to = arr.length - 1) => {
  for (let i = from; i < to; i++) {
    let min = i;
    for (let j = i + 1; j <= to; j++) {
      if (arr[j] < min) {
        min = j;
      }
    }
    [arr[i],arr[min]] = [arr[min], arr[i]];
  }
  return arr;
};
