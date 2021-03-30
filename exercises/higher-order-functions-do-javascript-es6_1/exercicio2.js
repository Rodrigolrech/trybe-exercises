const resultadoSorteiro = (numeroApostado) => {
  const numeroSorteado = Math.floor(Math.random() * 5) + 1;
  console.log(numeroSorteado);
  console.log(check(numeroApostado, numeroSorteado));
}

const check = (num1, num2) => {
  if (num1 === num2) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
}
resultadoSorteiro(5);