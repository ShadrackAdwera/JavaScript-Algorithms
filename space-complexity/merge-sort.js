const sort = (arr) => {
    if (arr.length < 2) {
      return arr;
    }
    if (arr.length === 2) {
      return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
    }
    const middle = Math.floor(arr.length / 2);
    const leftArray = arr.slice(0, middle);
    const rightArray = arr.slice(middle);
  
    const leftSortedArray = sort(leftArray);
    const rightSortedArray = sort(rightArray);
  
    const mergedArr = [];
    let leftArrIndex = 0;
    let rightArrIndex = 0;
    while (
      leftArrIndex < leftSortedArray.length ||
      rightArrIndex < rightSortedArray.length
    ) {
      if (
        leftArrIndex >= leftSortedArray.length ||
        leftSortedArray[leftArrIndex] > rightSortedArray[rightArrIndex]
      ) {
        mergedArr.push(rightSortedArray[rightArrIndex]);
        rightArrIndex++;
      } else {
        mergedArr.push(leftSortedArray[leftArrIndex]);
        leftArrIndex++;
      }
    }
  
    return mergedArr;
  };

  //Space COmplexity: O(n) : Nested Functions with new values being created