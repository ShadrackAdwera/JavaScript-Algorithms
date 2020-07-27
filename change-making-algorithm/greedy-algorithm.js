const selectedChange = (coins, amount) => {

    let remainingAmount = amount

    const calculatedChange = {
        selectedCoins: {},
        numberOfCoins: 0
    }

    for(const coin of coins) {
        const coinCount = Math.floor(remainingAmount/coin)
        calculatedChange[coin] = coinCount
        calculatedChange.numberOfCoins += coinCount
        remainingAmount -= (coin * coinCount)

    }
    return calculatedChange

}

const coins = [100,50,20,10,5,2,1]
console.log(selectedChange(coins, 129))