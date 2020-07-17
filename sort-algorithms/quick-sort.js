const sort = (arry) => {
    const copiedArray = [...arry];
  
    if (copiedArray.length <= 1) {
      return copiedArray;
    }
  
    const smallElementsArray = [];
    const middleElement = copiedArray.shift();
    const midElementsArray = [middleElement];
    const largeElementsArray = [];
  
    while (copiedArray.length) {
      const currElement = copiedArray.shift();
      if (middleElement === currElement) {
        midElementsArray.push(currElement);
      } else if (middleElement > currElement) {
        smallElementsArray.push(currElement);
      } else {
        largeElementsArray.push(currElement);
      }
    }
    const largeElementsSortedArray = sort(largeElementsArray);
    const smallElementsSortedArray = sort(smallElementsArray);
    return smallElementsSortedArray.concat(
      midElementsArray,
      largeElementsSortedArray
    );
  };
  
  const randArray = [91,93,96,84,93,82,66,21,8,61,34,42,58,3,74,44,67,16,36,76,29,64,49,32,5,17,79,64,71,29]
  console.log(sort(randArray));
  
  //TIME COMPLEXITY:
  
  //Recursive step runtime: O(n^logb(a)) => O(n^log2(2)) => O(n)
  //Runtime outside of the recursion: Loop that goes through all elements: O(n)
  //Overall Algorithm Runtime: O(n^logb(a) * log n) => O(n * log n)
  
  //Best Case: Items sorted Randomly => O(n*log n)
  //Average Case: Items sorted Randomly => O(n*log n)
  //Worst Case: Items already sorted, ascending or descending: One of the arrays will always be empty while the other one
  //containing all the elements: => O(n^2) : Going through a loop, adding recursion to the loop
  