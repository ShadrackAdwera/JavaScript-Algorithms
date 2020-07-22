//Permutations: An ordered combination of values
// Types: Without and with repetition

//Without Repetition: eg. TO-DO List : Multiple combinations with every task done once
//With Repetition: eg. Password Combination: Multiple combinations with values allowed to repeat themselves

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