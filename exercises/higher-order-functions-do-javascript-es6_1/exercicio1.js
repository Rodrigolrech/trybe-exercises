 const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: func('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: func('Carla Paiva')// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
}; 

const employeeRegister = (fullName) => {
  const emailName = fullName.toLowerCase().split(' ').join('_');
  return {
    fullName,
    email: `${emailName}@trybe.com`
  };
}

console.log(newEmployees(employeeRegister));