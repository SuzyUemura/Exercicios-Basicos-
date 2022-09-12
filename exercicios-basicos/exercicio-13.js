/* 13) Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
* Plano  ->  Aumento
*   A           10%
*   B           15%
*   C           20%
* Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo
* salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function aumentoSalarial(plano, salario) {
    switch (plano) {
        case 'a':
            salario += (salario * 0.10)
            console.log('Salario atual: ' + salario)
            break
        case 'b':
            salario += (salario * 0.15)
            console.log('Salario atual: ' + salario)
            break
        case 'c':
            salario += (salario * 0.20)
            console.log('Salario atual: ' + salario)
            break
        default:
            console.log('Plano inválido')
            break;
    }
}

aumentoSalarial('a', 1300)
aumentoSalarial('b', 2403)
aumentoSalarial('c', 3450)
aumentoSalarial('D', 5430)