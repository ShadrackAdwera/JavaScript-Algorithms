const knapsack = (items, capacity) => {

    let sack = { items: [], value:0, weight:0}
    let remainingCapacity = capacity

    for(let i =0; i<items.length;i++) {
        if(items[i].weight<=remainingCapacity) {
            sack.items.push(items[i])
            sack.value += items[i].value
            sack.weight += items[i].weight
            remainingCapacity -= items[i].weight
        }
    }
    
    return sack

}

const itemsArray = [
    { name: 'a', value: 3, weight: 3 },
    { name: 'b', value: 6, weight: 8 },
    { name: 'c', value: 10, weight: 3 },
    { name: 'd', value: 4, weight: 2 },
  ];
  
  console.log(knapsack(itemsArray, 8));