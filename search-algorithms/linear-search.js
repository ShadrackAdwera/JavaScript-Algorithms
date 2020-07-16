//The task is to find an element in an array. The Linear Search traverses through each 
//element in the array and returns the first occurrence of that element.
//Works on both ordered and unordered lists

const findElement = (arry, element) => {
    let index = 0
    for(const elem of arry) {
        if(elem == element) {
            return index
        }
        index++
    }
}

console.log(findElement([1,2,3,4,5,6,7,8,6,5,4,3,2], 6))

//Time Complexity
//Best Case Scenario - Element is at the first Index: O(1) => Constant Time Complexity.
//Average Case Scenario - Element position is not known: O(n) => Linear Time Complexity.
//Worst Case Scenario - Element is at the last position : O(n) => Linear Time Complexity


