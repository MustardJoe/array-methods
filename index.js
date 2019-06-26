const map = require('./array-modules');

const myArray = [2, 1, 20, 4];

function square1(num) {
  return num * num;
}

const rambo = map(myArray, square1);

console.log(rambo);
