const fatorial = (n) => {
let result = 1
 if (n > 0) {
   for (let index = 1; index <= n; index += 1) {
    result *= index;
   }
 }
 return result;
}
console.log(fatorial(4));