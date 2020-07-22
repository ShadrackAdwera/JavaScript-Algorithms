const cartProduct = (setA, setB) => {
    let product = []
    for(let setAElem of setA) {
        if(!Array.isArray(setAElem)) {
            setAElem = [setAElem]
        }
        for(const setBElem of setB) {
            product.push([...setAElem, setBElem])
        }
    }
    return product
}

//______________________________________
//Time Complexity: O(n*m)
//Space Complexity: O(n*m)
// O(m*n) because It is knnown that there will only be two values
//_______________________________________

const cartesianProduct = (...params) => {
    let tempProduct = params[0]
    for(let i = 1; i<params.length; i++) {
        tempProduct = cartProduct(tempProduct, params[i])
    }
    return tempProduct
}


const colors = ['Blue','Red','Yellow', 'Black', 'White','Brown']
const sizes = ['xs','S','M','L','XL']
const style = ['round neck','v-neck','button']

console.log(cartesianProduct(colors,sizes,style))


//------------------------------------------
//Expressed in a general way, the value of the arguments is not known beforehand
//Assumed the length of the longest array (Worst Case) is the length of all the arrays
//Time Complexity : O(n^x) : x is the number of input sets
//Space Complexity: O(n^x)