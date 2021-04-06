const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  
  let media = grades.map((element, index) => {
    let somaNotas = element.reduce((acc, cv) => {
    return acc + cv
  }, 0);
  
  mediaNota = somaNotas / (element.length)
  let average = {name: students[index], average: mediaNota}
  return average;
})
  return media;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);