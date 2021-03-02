
// Exercicio 1

function checkForPalindromo(word){

  let sum=0;

  for (let index = 0; index < word.length; index +=1){
    if (word.charAt(index) === word.charAt(word.length -1 - index)){
      sum+=1
    }
    
  }
  if (sum === word.length){
    return true
  } else{
    return false
  }
}

/*console.log(checkForPalindromo('arara'));
console.log(checkForPalindromo('desenvolvimento'));
console.log(checkForPalindromo('tenet'));*/

// Exercicio 2

function mostrarMaiorValor(array){
  let maiorValor = 0;
  let indexMaiorValor = 0;
  for (let index = 0; index < array.length; index += 1){
    if (array[index] > maiorValor){
      maiorValor = array[index];
      indexMaiorValor = index;
    }
  }
  return indexMaiorValor;
}

let valores = [2, 3, 6, 7, 10, 1];

console.log(mostrarMaiorValor(valores));

