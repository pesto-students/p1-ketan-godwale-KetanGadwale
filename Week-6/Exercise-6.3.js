function sortArray(arr) {
    const zeros = [];
    const ones = [];
    const twos = [];
    for (let i of arr) {
        switch (i) {
            case 0:
                zeros.push(i);
                break;
            case 1:
                ones.push(i);
                break;
            case 2:
                twos.push(i);
                break;
            default:
                return 'Invalid Input';
        }
    }

    return zeros.concat(ones.concat(twos));
}

const sorted = sortArray([0, 2, 1, 2, 0]);
console.log(sorted);
