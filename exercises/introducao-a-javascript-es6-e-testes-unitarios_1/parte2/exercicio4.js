const stringDeterminada = 'Trybe x aqui!';

const parametro = 'Bebeto';

const skills = ['css; HTML', 'JS ES6', 'Unix e Bash', 'Github'];

const trybeSkills = (string, parametro, array) => {
  let splitString = string.split('x');
  let result = '';
  for (let index = 0; index < splitString.length; index += 1) {
    if (index < splitString.length - 1) {
      result += splitString[index] + parametro;
    } else {
      result += splitString[index];
    }
  }

  result += `Minhas cinco principais habilidades sao:
  `;
  for (let index =0; index < array.length; index += 1) {
    result += `${array[index]};
    `;
  }
  result += '#goTrybe';
  return result;
}

console.log(trybeSkills(stringDeterminada, parametro, skills));