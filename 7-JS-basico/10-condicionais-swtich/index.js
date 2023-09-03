/*estruta switch
switch(parametro){
   case valor1:
      <bloco de declaracao>
      break
   case valor2:
      <bloco de declaracao>
      break
   default:
      <bloco de execucao>
}
Eu posso ter vários cases
O break serve para que quando o case for executado, ele pare a execução.
*/

/*
let nomeFilme = 'Senhor dos Anéis'

switch(nomeFilme){
   case 'Vingadores':
      'É o filme dos Vingadores'
      break
   case 'Batman':
      'É o filme do Batman'
      break
   case 'Senhor dos Anéis':
      'Senhor dos Anéis'
   default:
      'É algum outro filme'
}
*/

/* Temos tb multi casos:
Vamos criar um exemplo com string´s:
onde ele vai ler o que tem na váriavel e encaixar ela no case que corresponde
o mesmo valor,
quando não colocar o break, ele vai continuar a executar o código, nesse exemplo abaixo
o case 1 vai ter o mesmo valor que o case 2, o 3 o mesmo que o 4,
Se eu coloco algum valor para ele imprimir no case 3, e não coloco o break, ele 
vai imprimir o que está no 3 e o que está no 4, mesmo se na váriavel estiver com
o valor de 3, pois não pedi para parar no 3, se essa fosse a opção*/

let avaliacao = 3

switch(avaliacao){
   case 1: //aqui como não colocamos nada é como se estivessémos falando 1 ou 2 (que é o que vem a seguir)
   case 2:
      'Filme ruim'   
      break
   case 3: 
   case 4:
      'Filme mediano'
      break
   case 5:
      'Filme execelente'
      break
   default:
      'Nota inválida'
}
