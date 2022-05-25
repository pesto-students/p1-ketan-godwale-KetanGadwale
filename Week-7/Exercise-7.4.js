//Parenthesis Checker
let stack = [];
function parenthesisChecker(expression) {
    for (let i of expression) {
        if (i == '(' || i == '{' || i == '[') {
            stack.push(i);
            continue;
        }

        //stack should not be empty as i will be closing bracket
        if (stack.length == 0) {
            return false;
        }
        if (i == stack.pop()) {
            continue;
        }
    }

    return stack.length == 0;
}

console.log(parenthesisChecker('[()]{}{()()}'));
console.log(parenthesisChecker('[(]))'));
