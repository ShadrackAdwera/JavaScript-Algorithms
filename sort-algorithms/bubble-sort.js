const sort = (arry) => {
  const resultArray = [...arry];

  for (let outer = 0; outer < resultArray.length; outer++) {
    let outerElem = resultArray[outer];
    for (let inner = outer + 1; inner < resultArray.length; inner++) {
      let innerElem = resultArray[inner];

      if (outerElem > innerElem) {
        resultArray[outer] = innerElem;
        resultArray[inner] = outerElem;
        //update array
        outerElem = resultArray[outer];
        innerElem = resultArray[inner];
      }
    }
  }
  return resultArray
};

const randArray = [91,93,96,84,93,82,66,21,8,61,34,42,58,3,74,44,67,16,36,76,29,64,49,32,5,17,79,64,71,29]
console.log(sort(randArray));

//TIME COMPLEXITY
//Best Case Scenario : List is already Sorted => O(n)
//Average Case Scenario : Unordered List, Random Order => O(n^2)
//Worst Case Scenario : List is sorted in the reverse order, either ascending or descending => O(n^2)
