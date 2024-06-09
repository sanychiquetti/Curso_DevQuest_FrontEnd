//Desestruturação de objeto e de array

// Forma tradicional de fazer a desestruturação de objeto: 
// let pessoa = { nome: 'Sany', sobrenome: ' Garcia', idade: 46 }
// let nome = pessoa.nome
// let idade = pessoa.idade

// console.log(nome)
// console.log(idade)

//------------------------------------------------
//Podemos fazer a  desestruturação para que na declaração já possamos mapear as 
//propriedades do objeto para essas variáveis:

// let pessoa = { nome: 'Sany', sobrenome: ' Garcia', idade: 46 }
// let { nome: nome, sobrenome: sobrenome, idade: idade } = pessoa //veja que com a 
//abertura e fechamento de chaves é que declaramos a desestruturação

// console.log(nome)
// console.log(idade)
// console.log(sobrenome)

//------------------------------------------------
//Podemos usar a declaração de forma mais simples tb:
// let pessoa = { nome: 'Sany', sobrenome: ' Garcia', idade: 46 }
// let { nome, sobrenome, idade } = pessoa //veja que com a abertura e fechamento 
// das chaves é que declaramos a desestruturação, mas agora apenas colocando a propriedade

// console.log(nome)
// console.log(idade)
// console.log(sobrenome)

//------------------------------------------------
//Forma de desestruturar um array (vou usar o const pois não vou alterar os valores dos array)

const numeros = [1, 2, 3]  

const [ teste, dois, tres ] = numeros //veja que com a abertura e fechamento de
// colchetes é que declaramos a desestruturação de um array olhando o index de posicionamento 

console.log(teste)
console.log(dois)
console.log(tres)