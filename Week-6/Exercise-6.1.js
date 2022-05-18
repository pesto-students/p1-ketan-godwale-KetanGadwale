function maxSubArraySum(arr) {
    let maxSum = arr[0];
    let currentMaxSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentMaxSum = Math.max(arr[i], currentMaxSum + arr[i]);
        maxSum = Math.max(maxSum, currentMaxSum);
    }

    return maxSum;
}

console.log(maxSubArraySum([1, 2, 3, 4, -10]));
console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
