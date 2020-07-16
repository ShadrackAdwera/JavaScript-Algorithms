let counter = 0
const searchNums = (arry, num) => {
    for(let i = 0; i<arry.length; i++){
        counter++
        if(arry[i]==num){
            return i
        }
    }
}

console.log(searchNums([1,2,3,4,5,4,5,7,3,5,78,1,2,3], 78))
console.log(counter)