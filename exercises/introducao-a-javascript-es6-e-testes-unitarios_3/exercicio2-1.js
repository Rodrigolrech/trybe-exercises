const assert = require('assert');
// escreva a função addOne aqui

const addOne = (array) => {
  copyArray =[];
  for (const index in array) {
    copyArray[index] = array[index] + 1;
  }
  return copyArray;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);