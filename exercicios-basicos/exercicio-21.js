// 21) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.


const numeros = [1, 2, 3, 4, 5, -25, 78, 5, 6, 7, 20]

let maiorNumero = 0
let menorNumero = 0

numeros.forEach(function (n) {
    if (n < menorNumero) {
        menorNumero = n
    } else if (n > maiorNumero) {
        maiorNumero = n
    }
})

console.log(`o menor número é ${menorNumero} e o maior é ${maiorNumero}`)