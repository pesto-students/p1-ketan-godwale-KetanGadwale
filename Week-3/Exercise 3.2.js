//Call, Apply and Bind Exercise

//bind
function add(a, b) {
    return a + b;
}

const addFive = add.bind(this, 5);
console.log(addFive(5)); // => 10

//call and apply
const array = [5, 4, 3, 2, 1];
const [a, b, c, d, e] = array;


function findMinWithCall(a, b, c, d, e) {
    return Math.min.call(this, a, b, c, d, e);
}

function findMinWithApply(array) {
    return Math.min.apply(this, array);
}

console.log(findMinWithCall(a, b, c, d, e)); // => 1
console.log(findMinWithApply(array)); // => 1