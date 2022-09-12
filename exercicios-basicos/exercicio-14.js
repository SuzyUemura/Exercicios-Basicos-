/* 14) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando switch. 
*  Crie um case default que escreva ‘Número fora do intervalo.’
*/
// REFATORADO
function numeroExtenso(numero) {
   const extenso = ['zero', 'um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'] 
   
   if(numero < 0 || numero > 10) {
       console.log('Número inválido')
   } else {
       console.log(extenso[numero])
   }
}

numeroExtenso(1)
numeroExtenso(-1)
numeroExtenso(11)
numeroExtenso(7)
