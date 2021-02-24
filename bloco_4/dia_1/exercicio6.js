let peca = 'rEi';

switch (peca.toLowerCase()) {
  case ('rainha'):
    console.log('Horizontal, vertical e diagonais')
    break;
  case ('rei'):
    console.log('Horizontal, vertical e diagonais, mas apenas uma casa')
    break;
  case ('bispo'):
    console.log('Diagonais')
    break;
  case('cavalo'):
    console.log('em L, pulando outras pecas')
    break;
  case('torre'):
    console.log('vertical e horizontal')
    break;
  case('peao'):
    console.log('uma casa para frente, primeiro movimento podem ser duas, come outras pecas na diagonal')
    break;
}