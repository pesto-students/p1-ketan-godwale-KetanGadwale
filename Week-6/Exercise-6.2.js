const result = [];
function spiral2DArray(arr, i, j, r, c) {
    //indices are out of bound then return result
    if (i >= r || j >= c) return;

    //print first row
    for (let k = j; k < c; k++) {
        result.push(arr[i][k]);
    }

    //print last column
    for (let k = i + 1; k < r; k++) {
        result.push(arr[k][c - 1]);
    }

    //print last row in reverse
    if (r - 1 != i) {
        for (let k = c - 2; k >= j; k--) {
            result.push(arr[r - 1][k]);
        }
    }

    //print first column in reverse
    if (c - 1 != j) {
        for (let k = r - 2; k > i; k--) {
            result.push(arr[k][j]);
        }
    }

    spiral2DArray(arr, i + 1, j + 1, r - 1, n - 1);

    return result;
}

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
];

let m = arr.length;
let n = arr[0].length;

const output = spiral2DArray(arr, 0, 0, m, n);

console.log(output);
