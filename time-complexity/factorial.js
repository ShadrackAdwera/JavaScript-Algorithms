const factorial = (n) => {
  let product = 1;
  if (n <= 1) {
    return 1;
  }
  for (let i = 1; i <= n; i++) {
    product = product * i;
  }
  return product;
};

//Linear complexity O(n)
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));


//SOLUTION 2 : RECURSION

const factorial = n => {
    if(n===1) {
      return 1
    }
    return n * factorial(n-1)
  }
  
  //In every function call, O(1) but function is triggered n times = 1*n = n
  //Linear complexity O(n)
  console.log(factorial(3))
  console.log(factorial(4))
  console.log(factorial(5))