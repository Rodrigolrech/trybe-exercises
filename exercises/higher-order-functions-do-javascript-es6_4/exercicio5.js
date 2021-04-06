
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  let sumOfA = names.reduce((sum, word) => {
    let sumOfAWord = word.split('').reduce((sumAWord, char) => {
      if (char === 'A' || char === 'a') {
        return sumAWord + 1
      }
      return sumAWord
    }, 0)
    return sum + sumOfAWord
}, 0)
return sumOfA;}

assert.deepStrictEqual(containsA(), 20);