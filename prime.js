
//PRIMALITY TEST
//SOLUTION 1

const isPrime = (n) => {
    for (let i = 2; i < n; i++) { // 1
      if (n % i === 0) { //n-2
        return false; // 1
      }
    }
    return true // 1
  };
  
  //BestCase n=2 or n = 1 , Constant Time Complexity: O(1)
  //Average Case => O(n) //dont know the number in advance 
  //Worst Case, large Prime Number: eg. 27277 , Linear Time Complexity: O(n)
  
  console.log(isPrime(1))
  console.log(isPrime(27277))

  //SOLUTION 2
  const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) { // 1
      if (n % i === 0) { //n-2
        return false; // 1
      }
    }
    return true // 1
  };
  
  //One of the factors of a non prime number is always less than or equal to the square root of the number
  
  //BestCase n=2 or n = 1 , Constant Time Complexity: O(1)
  //Average Case => O(squareRoot(n)) //dont know the number in advance 
  //Worst Case, large Prime Number: eg. 27277 , Linear Time Complexity: O(squareRoot(n))
  
  console.log(isPrime(9))
  console.log(isPrime(27277))
  
  