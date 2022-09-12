/* 29) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o primeiro
*  elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente. Faça a troca
*  sem utilizar uma variável auxiliar.
*/

function trocarValores(vetorA, vetorB) {
    if (vetorA.length == vetorB.length) {
        for(let i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    } else {
        return 'Os vetores não possuem o mesmo tamanho.'
    }

    console.log(`vetor A: ${vetorA}`)
    console.log(`vetor B: ${vetorB}`)
}

let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

trocarValores(vetorA, vetorB)
