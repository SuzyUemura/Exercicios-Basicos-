/* 16) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado considerando
*  que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
*  1) crianças com menos de 10 anos pagam R$80; 
*  2) conveniados com idade entre 10 e 30 anos pagam R$50;  
*  3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95;
*  4) conveniados acima de 60 anos pagam R$130
*/

function calculoPlanoSaude(idade, qdteAdicional){
    let preco

    if (idade < 10){
        console.log(`Cod: 01 - Adicionais conveniados com menos que 10 anos. Total de adicionais:  ${qdteAdicional}. Valor total do plano: R$ ${100 + (qdteAdicional * 80)}`)
    } else if (idade <= 30) {
        console.log(`Cod: 02 - Adicionais conveniados com idade entre 10 e 30 anos. Total de adicionais:  ${qdteAdicional}. Valor total do plano: R$ ${100 + (qdteAdicional * 50)}`)
    } else if (idade > 30 && idade <= 60) {
        console.log(`Cod: 03 - Adicionais conveniados com idade acima de 30 e até 60 anos. Total de adicionais:  ${qdteAdicional}. Valor total do plano: R$ ${100 + (qdteAdicional * 95)}`)
    } else {
        console.log(`Cod: 04 - Adicionais conveniados acima de 60 anos. Total de adicionais:  ${qdteAdicional}. Valor total do plano: R$ ${100 + (qdteAdicional * 130)}`)
    }



   
}

calculoPlanoSaude(1, 2)
calculoPlanoSaude(10, 4)
calculoPlanoSaude(30, 3)
calculoPlanoSaude(27, 3)
calculoPlanoSaude(40, 2)
calculoPlanoSaude(60, 2)
calculoPlanoSaude(29, 1)
calculoPlanoSaude(61, 4)
calculoPlanoSaude(90, 3)