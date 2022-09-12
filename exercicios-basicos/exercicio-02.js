/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
*  Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes. 
*  Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao 
*  tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).
*/

function verificaTriangulo(a, b, c){
   if ((b - c) < a && a < (b + c)) {
       if ((a - c) < b && b < (a + c)) {
           if((a - b) < c && c < (a + b)){
               console.log('É triangulo')
               tipoTriangulo(a, b, c)
           }
       }
   } else {
       console.log('Não é um triangulo\n')
   }
}

function tipoTriangulo(a, b, c) {
    if (a == b && b == c){
        console.log('O triangulo é equilátero\n')
    } else if ((a != b) && (c != a) && (b != c)){
        console.log('O triangulo é escaleno\n')
    } else {
        console.log('O triango é isósceles\n')
    }
}

verificaTriangulo(20, 10, 18)
verificaTriangulo(200, 2, 3)
verificaTriangulo(3, 3, 3)
verificaTriangulo(1, 2, 3)
verificaTriangulo(3, 3, 4)