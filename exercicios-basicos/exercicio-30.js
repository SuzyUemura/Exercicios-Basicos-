/* 30) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de modo que
*  de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o conceito B
*  e de 9,0 a 10,0 o conceito A.
*/
const notas = [9, 7, 5, 4.4, 8.8, 0, 10, 3.3, 2]
 
function notaConceito(notas) {

   for(let i in notas){
        if((notas[i] == 0) && (notas[i] < 5)){
            console.log(`Nota: ${notas[i]}, conceito: D`)
        } else if (notas[i] < 7){
            console.log(`Nota: ${notas[i]}, conceito: C`)
        } else if (notas[i] < 9){
            console.log(`Nota: ${notas[i]}, conceito: B`)
        } else if (notas[i] <= 10){
            console.log(`Nota: ${notas[i]}, conceito: A`)
        } else {
            console.log("Nota inválida")
        }
    }
}

notaConceito(notas)