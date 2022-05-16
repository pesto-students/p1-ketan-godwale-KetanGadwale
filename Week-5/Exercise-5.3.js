const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

console.log(hasDuplicate([1, 5, -1, 4]));
console.log(hasDuplicate([2, 3, 6, 7, 8, 3, 6]));
