//-----------------
//SOLUTION 1: LOOPS
//-----------------

const factorial = n => {
    let product = 1
    for(let i = 2; i<=n; i++) {
        product *= i
    }
    return product
}


console.log(factorial(4))

//Step 1: Find places where data(values) is stored permanently in the algorithm

//Step 2: Count how often 'permanently stored values' are being created and kept around

//Space COmplexity O(1) : Operation is done on the same number throughout the loop iteration and no new values('permanent') are created

//----------------------
//SOLUTION 2 : Recursion
//----------------------

const fact = n => {
    if(n<=1) {
        return 1
    }
    return n * fact(n-1)
}

//Space Complexity : O(n)
//A new value is created for every nested function call - the parameter received





