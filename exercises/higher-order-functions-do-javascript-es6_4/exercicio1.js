
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];


function flatten() {
  const array = arrays.reduce((acc, x) => acc.concat(x));
  return array;
}
console.log(flatten())
//assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);