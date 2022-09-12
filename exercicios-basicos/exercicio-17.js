/* 17) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do aluno, 
*  considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do aluno, suas três notas,
*  a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5.
*  Repita a operação até que o código lido seja negativo.
*/

function mediaAluno (nota1, nota2, nota3){
    const media = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10
    console.log('Notas: '.concat(nota1, ', ').concat(nota2, ', ').concat(nota3, '.')) 
    return media.toFixed(2)
}

function statusAluno(cod, mediaAluno) {
    if(mediaAluno >= 5 && mediaAluno <= 10){
        console.log(`Aluno: ${cod} Média: `.concat(mediaAluno) + ' Status: '.concat('APROVADO\n'))
    } else if(mediaAluno <= 4 && mediaAluno >= 0){
        console.log(`Aluno: ${cod} Média: `.concat(mediaAluno) + ' Status: '.concat('REPROVADO\n'))
    } else {
        console.log('Média inválida\n')
    }
}

statusAluno(001, mediaAluno(4, 3, 3))
statusAluno(002, mediaAluno(6, 3, 7))
statusAluno(006, mediaAluno(10, 10, 10))
statusAluno(007, mediaAluno(11, 11 , 11))