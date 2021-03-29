 const newEmployees = () => {
  const employees = {
    id1: employeeRegister('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: employeeRegister('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: employeeRegister('Carla Paiva')// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
}; 
/* https://pt.stackoverflow.com/questions/382479/removendo-todos-os-espa%C3%A7os-de-uma-string-usando-javascript
para tirar os espacos e adicionar _ entre os nomes */
const employeeRegister = (fullName) => {
  const emailName = fullName.replace(/\s/g, '_')
  return {
    fullName,
    email: `${emailName}@trybe.com`
  };
}

console.log(newEmployees());