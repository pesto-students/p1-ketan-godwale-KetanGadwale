function closestSumWith3Pairs(arr, target) {
    arr.sort();

    let closestSum = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < arr.length - 2; i++) {
        let p1 = i + 1;
        let p2 = arr.length - 1;

        while (p1 < p2) {
            let sum = arr[i] + arr[p1] + arr[p2];

            if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
                closestSum = sum;
            }

            if (sum > target) {
                p2--;
            } else {
                p1++;
            }
        }
    }

    return closestSum;
}

console.log(closestSumWith3Pairs([-1, 2, 1, -4], 1));
