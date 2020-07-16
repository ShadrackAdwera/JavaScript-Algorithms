//SOLUTION 1

const fib = (n) => {
  const numbers = [1, 1]; //1
  for (let i = 2; i < n + 1; i++) {
    //1
    numbers.push(numbers[i - 1] + numbers[i - 2]); // n-1
  }
  return numbers[n]; //1
};

// Asymptotic Analysis
// 1 + 1 + 1 + (n-1)
// 4 + n = n
// O(n) : Linear Time Complexity

//_____________________________________________________________________________________________________________________

//SOLUTION 2 : Recursive Function
let counter = 0;
const fib = (n) => {
  counter++;
  if (n === 1 || n === 0) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};

fib(2);
console.log(counter); //runs 3 times
counter = 0;

fib(20);
console.log(counter); // runs 21,891 times
counter = 0;

fib(30);
console.log(counter); // runs 2,692,537 times
counter = 0;

//Time Complexity : O(2^n)
//For every function execution we start two new function executions

//_____________________________________________________________________________________________________________________

//SOLUTION 3: Recursion + Memoization aka 'Dynamic Programming'
const fib = (n, memo) => {
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
console.log(counter); // runs 3 times
counter = 0;

fib(20);
console.log(counter); // runs 39 times
counter = 0;

fib(30);
console.log(counter); // runs 59 times
counter = 0;

//Memoization is a perfomance optimization technique which stores the results of expensive function calls and  provides the values incase such computations are repeated again
// Time Complexity is no O(n) => Linear time complexity
