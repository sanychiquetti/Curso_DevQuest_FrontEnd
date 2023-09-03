/*
O que é hoisting?
   O interpretador do Js faz várias operações nos bastidores, e uma delas é 
   o hoisting, traduzindo seria 'Içamento'.

Vamos avaliar o comportamento das variáveis do Js, e a melhor maneira de 
avaliar é pensar em duas partes:
- 1º É a declaração da variável
- 2º É a inicialização ou atribuição dessa variável
Exemplo:
var pais  // declaração (uma instrução no js)
pais = 'Brasil' // atribuição (outra instrução no js)

Que é feito tudo na mesma linha:
var pais = 'Brasil'

*** Mesmo declarando uma variável dentro de um scopo, elas são movidas
para o topo desse scopo, seja ele local ou global***
Isso é o hoisting, as declarações são içadas para o topo do scopo
ele só move a declaração da variável, ele não move a atribuição dela, 
a atribuição fica onde ela foi atribuida.

Exemplo com var:
console.log(nome) // a variável ele vai encontrar, mas a atribuição dela não, então traria o resultado de undefined
var nome = 'Sany'

Exemplo com let ou const:
console.log(lastName) // ele vai imprimir um erro de referência pois não inicializou 
let lastName = 'Sany'
*/