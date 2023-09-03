/*Funções são um dos conceitos mais importantes no Js
estrutura:
   function nomeDaFuncao(){
      <bloco de execucao>
   }
   nomeDaFuncao() // para que ela funcione precisamos chamar a função
exemplo:

function incentivarQuester(){
   alert('Muito bem, você chegou ao JS, continue assim!')
}
incentivarQuester()
*/
/*Aqui com paramêtros: 
   function nomeDaFuncao(parametro1, parametro2, qtosEuQuiser){
      <bloco de execucao>
   }

   nomeDaFuncao() // aqui preciso chamar a funcao, e dar valores ao parâmetro que quero

function soma(numero1, numero2){
   console.log(numero1 + numero2) 
}
soma(3, 2)
*/

//Se quero que essa função retorne um valor: 
function soma(numero1, numero2){
   return numero1 + numero2
}
let resultadoDaSoma = soma(5, 6) // posso colocar esse resultado em uma variável, estarei atribuindo uma funcao a uma variável
console.log(resultadoDaSoma)

//então posso usar essa variável para qualquer outra coisa
resultadoDaSoma = soma(resultadoDaSoma, 10) // aqui estou reatribuindo o valor da variavel adicionando valor
console.log(resultadoDaSoma)


//Caso eu queira mandar valores padrões para o parâmetro, e posso concatenar
function incentivarQuester(nomeQuester = 'Quester'){
   alert('Muito bem ' + nomeQuester + ' você chegou ao JS, continue assim!')
} 
incentivarQuester('Sany') // aqui se eu não coloca nada nos (), ele vai escrever o que está
//definido na função (aqui no caso seria Quester), se eu coloco um valor, ele substitui

 a = -5
 b = '-70'
 const soma2 = -5 + '-70'
 console.log(soma2)