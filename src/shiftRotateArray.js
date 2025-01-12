const reverse = (arr, from, to = arr.length - 1) => {
  let i = from;
  let j = to;

  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
};
