let pets = [
   { nome: 'Pepe', idade: 12 },
   { nome: 'Mimi', idade: 12 },
   { nome: 'Lui', idade: 9 },
   { nome: 'Boo', idade: 9 }
]

// let nomeDosPets = []
// for (let i = 0; i < pets.length; i++) {
//    nomes.push(pets[i].nome)
// }

// com o map criamos uma cópia do array, mas colocando apenas o objeto que queremos
// let nomeDosPets = pets.map(function(pet){
//    return pet.nome
// })

//forma menos verbosa usando arrow function:
// let nomeDosPets = pets.map((pet) => pet.nome)

//podemos concatenar tb:
let nomeDosPets = pets.map(pet => pet.nome + " tem " + pet.idade + " de idade.")
console.log(nomeDosPets)