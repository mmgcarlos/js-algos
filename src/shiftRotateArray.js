const reverse = (arr, from = 0, to = arr.length - 1) => {
  let i = from;
  let j = to;

  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  return arr;
};

const rotate = (arr, n) => {
  if (arr.length <= 1) {
    return arr;
  } else if (n < 0) {
    n = arr.length - (n % arr.length);
  } else if (n === 0) {
    return arr;
  } else if (n >= arr.length) {
    n = n % arr.length;
  }
  let to = arr.lenght - 1;
  reverse(arr, 0, to);
  reverse(arr, 0, n - 1);
  reverse(arr, n, to);
  return arr;
};

module.exports = {
  reverse,
  rotate
};
