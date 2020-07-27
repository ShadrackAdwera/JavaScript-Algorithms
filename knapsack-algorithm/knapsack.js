const knapsack = (items, capacity, itemIndex) => {
    if (capacity === 0 || itemIndex < 0) {
      return { items: [], value: 0, weight: 0 };
    }
  
    if (capacity < items[itemIndex].weight) {
      return knapsack(items, capacity, itemIndex - 1);
    }
  
    const sackWithItems = knapsack(
      items,
      capacity - items[itemIndex].weight,
      itemIndex - 1
    );
  
    const sackWIthoutItems = knapsack(items, capacity, itemIndex - 1);
  
    const valueWithItem = sackWithItems.value + items[itemIndex].value;
    const valueWithoutItem = sackWIthoutItems.value;
  
    if (valueWithItem > valueWithoutItem) {
      const updatedSack = {
        items: sackWithItems.items.concat(items[itemIndex]),
        value: sackWithItems.value + items[itemIndex].value,
        weight: sackWithItems.weight + items[itemIndex].weight,
      };
      return updatedSack;
    } else {
      return sackWIthoutItems;
    }
  };
  
  const itemsArray = [
    { name: 'a', value: 3, weight: 3 },
    { name: 'b', value: 6, weight: 8 },
    { name: 'c', value: 10, weight: 3 },
  ];
  
  console.log(knapsack(itemsArray, 8, itemsArray.length - 1));
  