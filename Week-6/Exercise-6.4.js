function maxProfit(arr) {
    let buyPrice = arr[0];
    let sellPrice = arr[0];
    let profit = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - buyPrice > profit) {
            sellPrice = arr[i];
            profit = sellPrice - buyPrice;
        } else if (arr[i] < buyPrice) {
            buyPrice = arr[i];
        }
    }

    return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

console.log(maxProfit([7, 6, 4, 3, 1]));
