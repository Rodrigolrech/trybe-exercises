const checkAnswers = (gabarito) => {
  return (respostaAluno) => {
    return () => {
      sum = 0;
      for (let index = 0; index < gabarito.length; index += 1) {
        if (respostaAluno[index] === 'N.A') {
          sum = sum;
        }
        else if (gabarito[index] === respostaAluno[index]) {
          sum += 1;
        } else {
          sum -= 0.5;
        }
      }
      return sum;
    } 
  }
}
const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(checkAnswers(rightAnswers)(studentAnswers)());
