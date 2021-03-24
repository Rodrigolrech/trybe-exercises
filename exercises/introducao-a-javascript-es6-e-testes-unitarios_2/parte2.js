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

const listKeysOfObject = (object) => Object.keys(object);

const objectSize = (object) => Object.keys(object).length;

const listValueOfObject = (object) => Object.values(object);

const AllLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});

console.log(AllLessons);
