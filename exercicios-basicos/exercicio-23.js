//23) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

const notas = [5, 6, 9, 8, 5]

let media = notas.reduce(function(acumulador, atual){
    return acumulador + atual}, 0)

media = media / notas.length
console.log(`A média é ${media}`)