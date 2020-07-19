const cartProduct = (setA, setB) => {
    let product = []
    for(const setAElem of setA) {
        for(const setBElem of setB) {
            product.push([setAElem, setBElem])
        }
    }
    return product
}


const colors = ['Blue','Red','Yellow', 'Black', 'White','Brown']
const sizes = ['xs','S','M','L','XL']

console.log(cartProduct(colors, sizes))