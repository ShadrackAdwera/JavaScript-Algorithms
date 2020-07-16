const searchNums = (arry, num) => {
   let sortedArray = arry.sort((a,b)=>a-b)

   let startingIndex = 0
   let endIndex = sortedArray.length - 1

   while(startingIndex<=endIndex) {
       let middleIndex = startingIndex + Math.floor((endIndex - startingIndex)/2)
       if(sortedArray[middleIndex]===num){
           return middleIndex
       }

       if(sortedArray[middleIndex] > num) {
        endIndex = middleIndex - 1
       } else {
           startingIndex = middleIndex + 1
       }
   }
    
}

const arry = [91,93,96,84,93,82,66,21,8,61,34,42,58,3,74,44,67,16,36,76,29,64,49,32,5,17,79,64,71,29]

console.log(searchNums(arry, 3))

//Best Case Scenario : O(1) => Constant Time Complexity: Element in the middle

//Average Case Scenario : O(log n) : Logarithmic Time- Split the array in half with every iteration : Element anywhere in the array

//Worst Case Scenario : O(log n) : Logarithmic Time - Split the array in half with every iteration =>  : Element at the beginning or the end