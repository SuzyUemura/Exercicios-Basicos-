/* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre 
*  no console a soma, subtração, multiplicação e divisão desses valores.
*/

function operacoesMatematicas(a, b) {
    console.log('Soma => '.concat(a + b))
    console.log('Subtração => '.concat(a - b))
    console.log('Multiplicação => ' + a * b)
    console.log('Divisão => ' + a / b)
}

operacoesMatematicas(10, 10)