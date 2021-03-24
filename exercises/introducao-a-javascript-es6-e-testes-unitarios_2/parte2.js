const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addKeyValue = (object,key,value) => object[key] = value;

addKeyValue(lesson2,'turno','manhã');
console.log(lesson2);


const listKeysOfObject = (object) => Object.keys(object);

console.log(listKeysOfObject(lesson2));

const objectSize = (object) => Object.keys(object).length;

console.log(objectSize(lesson2));

const listValueOfObject = (object) => Object.values(object);

console.log(listValueOfObject(lesson2));
