// Finds the value which does not have
// a pair in the array. It modifies the
// original array. Returns the value and
// position of the element. 

const missingPair = (arr, from = 0, to = arr.length - 1) => {
  if (from === 0 && to === 0) {
    return[arr[0], 0];
  }
  
  let expectPair = false;
  for (let i = from; i < to; i++) {
    let min = i;
    for (let j = i + 1; j <= to; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i],arr[min]] = [arr[min], arr[i]];
    if (expectPair) {
      if (arr[i] !== arr[i - 1]) {
        return [arr[i - 1], i-1];
      }
    }
    expectPair = !expectPair;
  }
  // eslint-disable-next-line no-undef
  console.log(arr, expectPair);
  if (arr.length > 1 && expectPair) {
    return [arr.length - 1, arr.length - 1];
  }
  return [];
};

module.exports = {
  missingPair
};
