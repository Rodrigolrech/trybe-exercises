 const newEmployees = () => {
  const employees = {
    id1: employeeRegister('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: employeeRegister('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: employeeRegister('Carla Paiva')// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
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

console.log(newEmployees());