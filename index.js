const map = require('./array-modules');

const myArray = [2, 1, 20, 4];

function square(num) {
    return num * num;
}

const rambo = map(myArray, square());

console.log(rambo);