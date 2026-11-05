const fibonacci = function(num) {
    let a = 1;
    let b = 0;
    let temp;

    if (!Number.isInteger(num) || num <= 0) {
        return "OOPS";
    }

    while (num > 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
};
// Do not edit below this line
module.exports = fibonacci;



// npx jest /Users/rovitsanthapa/javascript-exercises/foundations/object_basics/03_fibonacci/fibonacci.spec.js