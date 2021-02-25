let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercicio 1
for(let index = 0; index < numbers.length; index += 1){
  console.log(numbers[index]);
}

//Exercicio 2

let soma = 0;
for(let index = 0; index < numbers.length; index += 1){
  soma += numbers[index];
}
console.log(soma)

//Exercicio 3

let soma2 = 0;
for(let index = 0; index < numbers.length; index += 1){
  soma2 += numbers[index];
}
let media = soma2/numbers.length;
console.log(media);

//Exercicio 4
if (media > 20){
  console.log('valor maior que 20');
} else{
  console.log('valor menor ou igual a 20');
}

//Exercicio 5
let maior = 0;
for (let indexMaior = 0; indexMaior < numbers.length; indexMaior += 1){
  if (numbers[indexMaior] > maior){
    maior = numbers[indexMaior];
  }
}
console.log(maior);

//Exercicio 6
let impar = 0;
for (let indexImpar = 0; indexImpar < numbers.length; indexImpar += 1){
  if (numbers[indexImpar] % 2 !== 0){
    impar += 1;
  }
}
if (impar >= 0){
  console.log(impar)
} else {
  console.log('nenhum valor impar encontrado');
}

//Exercicio 7
let menor = numbers[0]

for (let indexMenor = 0; indexMenor < numbers.length; indexMenor += 1){
  if (numbers[indexMenor] < menor){
    menor = numbers[indexMenor];
  }
}
console.log(menor);

//Exercicio 8
let array = []

for (indexArray = 1; indexArray <= 25; indexArray+= 1){

  array.push(indexArray);
}
console.log(array);

//Exercicio 9

for (indexArrayDiv = 0; indexArrayDiv < array.length; indexArrayDiv += 1){
  console.log(array[indexArrayDiv] / 2);
}

