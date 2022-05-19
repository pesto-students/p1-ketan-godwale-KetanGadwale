function spiral2DArray(arr, i, j, r, c) {
    let result = [];
    //indices are out of bound then return result
    if (i >= r || j >= c) return result;

    //print first row
    for (let k = j; k < c; k++) {
        result.push(arr[i][k]);
    }

    //print last column
    for (let k = i + 1; k < r; k++) {
        result.push(arr[k][c - 1]);
    }

    //for testing
    console.log(result);
}

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let m = arr.length;
let n = arr[0].length;

const output = spiral2DArray(arr, 0, 0, m, n);
