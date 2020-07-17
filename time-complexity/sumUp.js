//Return the sum of all numbers upto a specific digit

//SOLUTION 1: Loops

const sumUp = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += num;
  }
  return sum
};

//Time Complexity: Linear Time Complexity => O(n)


//SOLUTION 2
const sumUp = (num) => {
  return (num / 2) * (num + 1);
};

//Time Complexity : Constant Time: O(1)
