//Definição de spread:
// Com o operador spread conseguimos expandir os elementos de um objeto iterável
// o objeto iterável é um array ou até mesmo uma string, são objetos que podem ser percorridos

const pessoas = ['Sany', 'Marco', 'Glória']
//console.log(pessoas)

//Com o operador spread fazemos da seguinte forma:
console.log(...pessoas) //dessa forma ele não mostra um array, e sim os 3 elementos separadamente

/* Um uso bem comun do spread, é concatenar dois array´s: */

let pessoas1 = ['Sany', 'Marco', 'Glória']
let pessoas2 = ['Cler', 'Eduardo', 'Tereza']

//pessoas1 = pessoas1.concat(pessoas2) //Jeito antigo de concatenar

pessoas1 = [ ...pessoas1, ...pessoas2 ] // usando o spread
console.log(pessoas1)

/* Podemos usar tb para clonar o objeto */

const pessoa1 = { nome: 'Sany', idade: 46 }

const objetoClonado = { ...pessoa1 }
console.log(objetoClonado) //dessa forma podemos alterar livremente, sem alterar o original
console.log(pessoa1)