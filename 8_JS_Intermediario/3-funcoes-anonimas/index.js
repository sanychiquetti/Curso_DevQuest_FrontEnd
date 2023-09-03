/*
Funções anônimas são funções que não recebem nome.
Podemos usar uma função anônima para atribuir uma função a uma variável, e retornar
algo depois de essa função para essa variável, e usar essa variável 
dentro do nosso código.
Use os nome da variável de forma imperativa.
Exemplo:
*/
let somar = function(numero1, numero2){ // veja que a variável ela recebe uma função que não tem nome como resultado
   return numero1 + numero2
}
console.log(somar(12, 5))

