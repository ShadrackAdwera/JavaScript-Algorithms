const binarySearch = (arry, n) => {
    const sortedArray = arry.sort((a,b)=>a-b)
    let startIndex = 0
    let endIndex = sortedArray.length - 1

    while(startIndex!==endIndex) {
        let middleIndex = startIndex+Math.floor((endIndex-startIndex)/2)
        if(sortedArray[middleIndex]===n) {
            return middleIndex
        }
        if(sortedArray[middleIndex]>n) {
            endIndex = middleIndex -1
        } else {
            startIndex = middleIndex + 1
        }
    }
}

//Space COmplexity: O(1)
//No new permanent values are created during iteration 