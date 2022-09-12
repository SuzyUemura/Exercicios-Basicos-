/* 26) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro.
*  Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada elemento pelo 
*  número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se o valor do elemento
*  for maior que 5.
*/

const numericos = [2, 8, 4, 5]

const multiplicacao = (vetor, x) => vetor.forEach(e => console.log(e * x))
const multiplicacao2 = (vetor, x) => vetor.filter(n => n > 5).forEach(n => console.log(n * x))

console.log('Multiplicação 01')
multiplicacao(numericos, 3)

console.log('Multiplicação 02')
multiplicacao2(numericos, 4)
