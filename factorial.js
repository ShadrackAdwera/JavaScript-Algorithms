const factorial = n => {
    let product = 1
    if(n<=1) {
        return 1
    }
    for(let i =1; i<=n; i++) {
        product = product * i
    }
    return product
}

console.log(factorial(2))