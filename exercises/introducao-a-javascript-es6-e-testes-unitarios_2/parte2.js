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

const addKeyValue = (object, key, value) => object[key] = value;

addKeyValue(lesson2, 'turno', 'manhã');

const listKeysOfObject = (object) => Object.keys(object);

const objectSize = (object) => Object.keys(object).length;

const listValueOfObject = (object) => Object.values(object);

const AllLessons = Object.assign({}, { lesson1 }, { lesson2 }, { lesson3 });

const somaAulas = (obj) => {
  sum = 0;
  if (Object.keys(obj).includes('numeroEstudantes')) {
    for (const key in obj)
      if (key === 'numeroEstudantes') {
        sum += obj[key];
        
      }
      return sum;
  }
  if (Object.keys(Object.keys(obj).includes('numeroEstudantes'))){
    for (const key in obj) {
      sum += obj[key].numeroEstudantes;
    }
    return sum;
  }
  
}

const getValueByNumber = (obj, position) => {
  const entriesArray = Object.entries(obj)
  return entriesArray[position][1];
}

/* const verifyPair = (obj, key, value) => {
  const entriesArray = Object.entries(obj);
  const keyValueArray = [key,value];
  console.log("entriesArray:")
  console.log(entriesArray);
  console.log('typeOf entriesArray:')
  console.log(typeof(entriesArray));
  console.log('keyValueArray :')
  console.log(keyValueArray);
  console.log('typeOf keyValueArray :')
  console.log(typeof(keyValueArray));
  if (entriesArray.includes(keyValueArray)) {
    return true;
  }
  return false;
}

console.log(verifyPair(lesson3, 'turno', 'noite')); */

const verifyPair = (obj, key, value) => {
  for (let chave in obj) {
    if (chave === key && obj[chave] === value) {
      return true
    }
  }
  return false
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
