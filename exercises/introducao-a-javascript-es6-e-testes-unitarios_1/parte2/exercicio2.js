const maiorPalavra = (string) => {
  let array = string.split(' ');
  let indexArrayMaiorPalavra = 0;
  for (let index = 1; index < array.length; index += 1) {
    if (array[index].length > array[indexArrayMaiorPalavra].length) {
      indexArrayMaiorPalavra = index;
    }
  }
  return array[indexArrayMaiorPalavra];
}

console.log(maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu"));