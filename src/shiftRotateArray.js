const reverse = (arr, from, to = arr.length - 1) => {
  let i = from;
  let j = to;

  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
};

const rotate = (arr, n) => {
  if (n < 0) {
    n = arr.length - (n % arr.length);
  }
  if (n >= arr.length) {
    n = n % arr.length;
  }
  if (n === 0) {
    return;
  }
  if (arr.length <= 1) {
    return;
  }
  let to = arr.lenght - 1;
  reverse(arr, 0, to);
  reverse(arr, 0, n);
  reverse(arr, n + 1, to);
};
