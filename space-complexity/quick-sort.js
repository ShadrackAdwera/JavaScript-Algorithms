const quickSort = arry => {
    const sortedArray = [...arry]

    if(sortedArray.length<=1) {
        return sortedArray
    }

    const largeArray = []
    const smallArray = []
    const midElem = sortedArray.shift()
    const middleArray = [midElem]

    while(sortedArray.length!==0) {
        let currElem = sortedArray.shift()
        if(midElem===currElem) {
            middleArray.push(currElem)
        }
        if(middleArray<currElem) {
            largeArray.push(currElem)
        } else {
            smallArray.push(currElem)
        }
    }
    const sortedSmallArray = quickSort(smallArray)
    const sortedLargeArray = quickSort(largeArray)
    return sortedSmallArray.concat(middleArray, sortedLargeArray)
}

//Space Complexity : O(n) : Nested function calls with new values created


