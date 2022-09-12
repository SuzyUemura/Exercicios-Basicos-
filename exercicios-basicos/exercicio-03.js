/* 02) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o 
*  resto da divisão destes dois valores.
*/

function divisao(dividendo, divisor){
    const resultado = dividendo / divisor
    const restoDivisao = dividendo % divisor

    console.log('Resultado da divisão é: '.concat(resultado))
    console.log('O resto da divisão: '.concat(restoDivisao))
}

divisao(10,5)