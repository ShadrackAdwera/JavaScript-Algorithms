const knapsack = (items, capacity, itemIndex) => {

    if(capacity===0 || itemIndex < 0) {
        return { items: [], value: 0, weight: 0 }
    }
    if(items[itemIndex].weight > capacity) {
        return knapsack(items, capacity, itemIndex-1)
    }
    const sackWithItem = knapsack(items, capacity - items[itemIndex].weight, itemIndex - 1)
    const sackWithoutItem = knapsack(items, capacity, itemIndex - 1)

    const valueAdded = sackWithItem.value + items[itemIndex].value
    const notValueAdded = sackWithoutItem.value

    if(valueAdded > notValueAdded) {
        const updatedSack = {
            items: sackWithItem.items.concat(items[itemIndex]),
            value: sackWithItem.value + items[itemIndex].value,
            weight: sackWithItem.value + items[itemIndex].weight
        }
        return updatedSack
    } else {
        return sackWithoutItem
    }
}

const itemsArray = [
    { name: 'a', value: 3, weight: 3 },
    { name: 'b', value: 6, weight: 8 },
    { name: 'c', value: 10, weight: 3 },
  ];
  
  console.log(knapsack(itemsArray, 8, itemsArray.length - 1));