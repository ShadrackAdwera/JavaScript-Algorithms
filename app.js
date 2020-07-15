const isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
};

//   //Best Case
   console.log(isPowerOfTwo(7))
//   //Average Case
   console.log(isPowerOfTwo(36))
//   //worst case ie. 2^50
   console.log(isPowerOfTwo(1125899906842624))