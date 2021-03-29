const checkAnswer = (gabarito) => {
  return (respostaDada) => {
    if (gabarito === respostaDada) {
      return true
    }
    return false
  }
}

const resposta = checkAnswer('trybe');

console.log(resposta('trybe'));