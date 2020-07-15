const minNum = arry => {
    let smallestNum = arry[0]
    for(const num of arry) {
      console.log('running')
      if(num < smallestNum) {
        smallestNum = num
      }
    }
    return smallestNum
  }
  
  //BEST CASE O(n) : 
  console.log(minNum([1,2,3,4,5]))
  
  //AVERAGE CASE O(n)
  console.log(minNum([8,3,8,2,6,9]))
  
  //WORST CASE O(n)
  console.log(minNum([5,4,3,2,1]))
  
  //Linear Time Complexity

  // EXAMPLE 2

  const evenOdd = n => {
    return n%2===0? 'Even' : 'Odd'
  }
  //Time Complexity O(1) Constant time Complexity
  
  console.log(evenOdd(3))