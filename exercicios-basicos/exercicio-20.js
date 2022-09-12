/* Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste
*  vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos 
*  deles estão fora do intervalo, escrevendo estas informações.
*/
    function percorre([x, y]) {
        let contador = 0

       for(let i = x; i <= y; i++) {
           contador ++
      }       
        console.log(`Entre ${x} e ${y} tem um intevalo de ${contador} números.`)
    }

percorre([10, 20])


