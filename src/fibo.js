const fibo = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('Input must be an integer greater than or equal to 0');
  }

  // Recursive function for Fibonacci calculation
  const computeFibo = (n) => {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return computeFibo(n - 1) + computeFibo(n - 2);
    }
  };

  return computeFibo(n);
};

module.exports = {
  fibo
};
