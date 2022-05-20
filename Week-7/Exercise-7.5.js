function nextGreaterNumbers(arr) {
    let stack = [];
    let result = Array(arr.length).fill(-1);

    for (let i = arr.length - 1; i >= 0; i--) {
        if (stack.length != 0) {
            while (stack.length != 0 && stack[stack.length - 1] <= arr[i]) {
                stack.pop();
            }
        }
        if (stack.length != 0) result[i] = stack[stack.length - 1];
        stack.push(arr[i]);
    }

    return result;
}

console.log(nextGreaterNumbers([1, 3, 2, 4]));

console.log(nextGreaterNumbers([6, 8, 0, 1, 3]));

console.log(
    nextGreaterNumbers([1, 2, 3, 5, 7, 8, 5, 6, 98, 90, 123, 456, 0, 2, 34, 54])
);
