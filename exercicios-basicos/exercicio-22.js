/* 22) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e 
*  imprime a quantidade no console. 
*/

const numeros = [1, 3, 0, - 7, -8, -3, -5, 2]
const negativos = n => n < 0
let contador = 0

let resultado = numeros.filter(negativos)
resultado.forEach(n => contador++)

console.log(`Quantidades de números negativos: ${contador}`)

