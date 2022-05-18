function hasPairWithDiff(arr, diff) {
    let _temp = new Set();
    for (let i of arr) {
        if (_temp.has(i)) return 1;
        _temp.add(i + diff);
        _temp.add(i - diff);
    }
    return 0;
}

console.log(hasPairWithDiff([5, 10, 3, 2, 50, 80], 78));
console.log(hasPairWithDiff([10, -20], 30));
