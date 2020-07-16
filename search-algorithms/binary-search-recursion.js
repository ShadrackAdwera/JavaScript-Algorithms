const searchNums = (arry, num, offset) => {
    let sortedArray = arry.sort((a,b)=>a-b)
    let startingIndex = 0
    let endIndex = sortedArray.length - 1

        const middleIndex = Math.floor((endIndex - startingIndex) / 2)
        if(num === sortedArray[middleIndex]) {
            return middleIndex + offset
        }
        if(sortedArray[middleIndex]<num) {
            startingIndex = middleIndex + 1
            offset = offset + middleIndex + 1
        } else {
            endIndex = middleIndex
        }
        return searchNums(sortedArray.slice(startingIndex, endIndex + 1), num, offset)
 }
 
 const arry = [91,93,96,84,93,82,66,21,8,61,34,42,58,3,74,44,67,16,36,76,29,64,49,32,5,17,79,64,71,29]
 
 console.log(searchNums(arry, 8, 0))