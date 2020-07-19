const linearSearch = (arry, n) => {
    for(let i = 0; i<arry.length; i++) {
        if(arry[i]===n) {
            return i
        }
    }
}

//Space Complexity: O(1)
//No new permanent values are created during iteration