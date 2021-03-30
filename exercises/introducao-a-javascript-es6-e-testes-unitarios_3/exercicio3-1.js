const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello ';
  let greetingResult =[];

  for (const person in people) {
    greetingResult.push(greeting + people[person]);
  }
  return greetingResult;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);