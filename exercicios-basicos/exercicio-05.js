/* 05) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira 
*  função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da 
*  aplicação sob o regime de juros compostos.
*/
// Tempo de aplicação é em meses

function jurosSimples(capitalInicial, juros, tempoAplicacao){
    let jurosSobCapital = juros * capitalInicial
    let lucro = jurosSobCapital * tempoAplicacao

    let capitalFinal = lucro + capitalInicial
    return 'R$ ' + capitalFinal
}

function jurosComposto(capitalInicial, juros, tempoAplicacao){
    let capitalFinal = capitalInicial * Math.pow((1 + juros), tempoAplicacao)

    return 'R$ ' + capitalFinal.toFixed(2)
}

console.log(jurosSimples(10000, 0.01, 12))
console.log(jurosComposto(10000, 0.01, 12))
 