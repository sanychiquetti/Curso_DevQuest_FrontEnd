let pets = [
   { nome: 'Pepe', idade: 12 },
   { nome: 'Mimi', idade: 12 },
   { nome: 'Lui', idade: 9 },
   { nome: 'Boo', idade: 9 }
]

// let petsComIdadesDe12Anos = []
// for(let i = 0; i < pets.length; i++){
//    if(pets[i].idade === 12){
//       petsComIdadesDe12Anos.push(pets[i])
//    }
// }

//agora usando o filter:
let petsComIdadesDe12Anos = pets.filter((pet) => pet.idade === 9)

console.log(petsComIdadesDe12Anos);