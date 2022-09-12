/* 24) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter 
*  quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
*  Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
*  mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
*/

const vetorInteiro = [1, 2, 3, 4]
const vetorString = ['a', 'b', 'c', 'd']
const vetorDecimais = [1.1, 2.2, 3.3, 4.4]

// 1 maneira
const resultado1 = vetorInteiro.concat(vetorString, vetorDecimais)
console.log(resultado1)

// 2 maneira
console.log([].concat(vetorInteiro, vetorString, vetorDecimais))