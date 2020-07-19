const bubbleSort = arry => {
  for(let outer = 0; outer<arry.length; outer++) {
      let outerElement = arry[outer]
      for(let inner = 0; inner<arry.length; inner++) {
          let innerElement = arry[inner]
          if(outerElement>innerElement) {
            innerElement = arry[outer]
            outerElement = arry[inner]
            //update array
            arry[outer] = outerElement
            arry[inner] = innerElement
          }

      }
  }
}

//Space Complexity O(1)