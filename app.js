let counter = 0;
const fib = (n, memo) => {
  counter++;
  memo = memo || {};
  if (memo[n]) {
    return memo[n];
  }
  if (n <= 1) {
    return 1;
  }
  return (memo[n] = fib(n - 1, memo) + fib(n - 2, memo));
};

fib(2);
console.log(counter);
counter = 0;

fib(20);
console.log(counter);
counter = 0;

fib(30);
console.log(counter);
counter = 0;
