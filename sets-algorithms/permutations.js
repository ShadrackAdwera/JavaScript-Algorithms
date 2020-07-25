//Permutations: An ordered combination of values
// Types: Without and with repetition

//Without Repetition: eg. TO-DO List : Multiple combinations with every task done once


const getPermutations = arry => {
    const permutations = []
    if(arry.length===1) {
        return [arry]
    }

    const partialPermutations = getPermutations(arry.slice(1))

    const firstOption = arry[0]

    for(let i = 0; i<partialPermutations.length; i++) {
        const partialPermutation = partialPermutations[i]
        for(let j = 0; j<=partialPermutation.length; j++) {
            const permInfront = partialPermutation.slice(0,j)
            const permAfter = partialPermutation.slice(j)
            permutations.push(permInfront.concat([firstOption],permAfter))
        }
    }
    return permutations
}

const toDo = ['Pretend to work','Try to look busy','Go home','Go for a run']

console.log(getPermutations(toDo))

//Time Complexity: O(n!)

//---------------------------------------------------------------------------------------------------------------------------------------------------------

//With Repetition: eg. Password Combination: Multiple combinations with values allowed to repeat themselves

function getPermutations(options, length) {
    const permutations = [];
  
    if (length === 1) {
      return options.map(option => [option]);
    }
  
    const partialPermutations = getPermutations(options, length - 1);
    // [[1], [2], [3]]
  
    for (const option of options) {
      for (const existingPermutation of partialPermutations) {
        permutations.push([option].concat(existingPermutation));
      }
    }
  
    return permutations;
  }
  
  const digits = [1, 2, 3, 4];
  const resultLength = 3;
  
  console.log(getPermutations(digits, resultLength));
  
  // Time Complexity: O(n^r) => n is the number options, r is the length