/*
if = quer dizer "se", criamos uma condição que vai retornar um true ou false,
para entrar no fluxo ou não
aqui vou testar se o nome do filme é idêntico o que está declarado na variável, se ele 
for igual vai entrar no fluxo- que seria imprimir o texto, senão imprime o else
else = quer dizer "se nãoque " se não for o if, será o else
else if = onde conseguimos ser mai específico que apenas else, posso usar mais de uma vez

let nomeFilme = 'Vingadores'

if(nomeFilme === 'Vingadores'){
   'é o filme dos Vingadores'
}else{
   'É outro filme'
}


let nomeFilme = 'Coringa'

if(nomeFilme === 'Vingadores'){
   'é o filme dos Vingadores'
}else if(nomeFilme === 'Batman vs Superman'){
   'É o filme do Batman vs Superman'
}else{
   'É outro filme'
}


Tem uma forma menos verbosa de fazer, com operador ternário
estrutura:
true ? 'quando a condição é verdadeira' : 'quando a condição é falsa' - vai executar a primeira condição
ou
false ? 'quando a condição é verdadeira' : 'quando a condição é falsa' - vai executar a segunda condição
exemplo:
*/
let nomeFilme = 'Vingadores'
nomeFilme === 'Vingadores' ? 'É  o filme dos Vingadores!' : 'Não é o filme dos Vingadores'