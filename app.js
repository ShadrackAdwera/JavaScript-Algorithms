const cartProduct = (arry1, arry2) => {
    const combineArray = []
    for(let i = 0; i<arry1.length; i++) {
        for(let j = 0; j<arry2.length; j++) {
            combineArray.push([arry1[i], arry2[j]])
        }
    }
    return combineArray
}

const a = ['mother','jammer', 'mbwa', 'kali']
const b = ['lala', 'chini', 'ndume']
console.log(cartProduct(a,b))