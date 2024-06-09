let ordens = [
   { cliente: 'Sany', tipo: 'compra', quantidade: 56, ativo: 'NFLX34' },
   { cliente: 'Cler', tipo: 'compra', quantidade: 76, ativo: 'AAPL34' },
   { cliente: 'Eduardo', tipo: 'compra', quantidade: 21, ativo: 'GOGL34' }
]

// let quantidadeDeOrdens = 0
// for (let i = 0; i < ordens.length; i++) {
//    quantidadeDeOrdens += ordens[i].quantidade // += soma e atribui a variavel a soma
// }
//o filter filtra os elementos do array original, o map transforma o array com o mesmo 
// número de elementos do array original, mas podendo pegar apenas um dos objetos, já o reduce 
// reduz temos formas diferentes de fazer uma soma das 
// o mesmo código acima com o reduce:
// let quantidadeDeOrdens = ordens.reduce(function(somaOrdens, ordem) {
//    console.log("Ordem", somaOrdens, ordem) // aqui vc vê a soma acontecendo
//    return somaOrdens + ordem.quantidade
// }, 0)

//forma reduzida de fazer:
let quantidadeDeOrdens = ordens.reduce((somaOrdens, ordem) => somaOrdens + ordem.quantidade, 0)

console.log(quantidadeDeOrdens)