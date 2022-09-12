/* 15) O cardápio de uma lanchonete é o seguinte:
*           >>>tabela no pdf<<<
*  Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor a ser
*  pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o comando switch. 
*  Crie um caso default para produto não existente.
*/

function calculoLanche(cod, qtde){
    switch (cod) {
        case 100:
            console.log(qtde + ' - Cachorro quente R$ '.concat(qtde * 3))
            break;
        case 200:
            console.log(qtde + ' - Hamburguer simples R$ '.concat(qtde * 4))
            break;
        case 300:
            console.log(qtde + ' - Cheeseburguer R$ '.concat(qtde * 5.50))
            break;
        case 400: 
            console.log(qtde + ' - Bauru R$ '.concat(qtde * 7.50))
            break;
        case 500:
            console.log(qtde + ' - Refrigerante R$ '.concat(qtde * 3.50))
            break;
        case 600:
            console.log(qtde + ' - Suco R$ '.concat(qtde * 2.80))
            break;
        default:
            console.log('Produto inexistente')
            break;
    }
}

calculoLanche(100, 5)
calculoLanche(200, 3)
calculoLanche(300, 18)
calculoLanche(400, 2)
calculoLanche(500, 4)
calculoLanche(600, 5)