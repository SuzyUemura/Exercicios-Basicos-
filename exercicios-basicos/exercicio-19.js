// 19) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let acumuladorImpar = 0
let acumuladorPar = 0

for(let i = 0; i < numeros.length; i++) {
    let impar = [i] % 2
    if(impar != 0 ){
        acumuladorImpar ++
    } else {
        acumuladorPar ++
    }
}

console.log(`${acumuladorPar} números são pares e ${acumuladorImpar} são ímpares.`)