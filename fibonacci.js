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

console.log(fib(4));
