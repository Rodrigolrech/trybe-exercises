const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (words) => {
  const arrayWordLength = [];
  for (const index in words) {
    arrayWordLength[index] = words[index].length;
  }
  return arrayWordLength;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);