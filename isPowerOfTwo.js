const isPowerOfTwo = (n) => {
    let dividedNumber = n
    if(n<1) {
      return false
    }
    while(dividedNumber !==1) {
      if(dividedNumber % 2 !==0) {
        return false
      }
      dividedNumber = dividedNumber / 2
    }
    return true
  }
  
  //Best Case: Number not divisible by 2 => Constant Time Complexity: O(1)
  //Average Case: Number divisible by  2 but not a power of 2 => Logarithmic Time Complexity => O(log n)
  //Worst Case: Large number that is a power of two => Logarithmic Time Complexity => O(log n) eg. 1,125,899,906,842,624
  
  //Best Case
  console.log(isPowerOfTwo(7))
  //Average Case
  console.log(isPowerOfTwo(36))
  //worst case ie. 2^50
  console.log(isPowerOfTwo(1125899906842624))