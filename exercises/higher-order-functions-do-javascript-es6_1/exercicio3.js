const checkAnswer = (gabarito) => {
  return (respostaDada) => {
    if (gabarito === respostaDada) {
      return true
    }
    return false
  }
}

console.log(checkAnswer('trybe')('trybe'));