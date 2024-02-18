//uma forma de fazer 
/*let videoGame = {
   nome: 'PlayStation 5',
   valor: 3700,
   jogos: ['Call of Duty', 'Fallout', 'Lol']
}

//outro forma de fazer
let videoGame = {
   nome: 'PlayStation 5',
   valor: 3700,
   jogos: [
      { nome: 'Call of Duty' },
      { nome: 'Lol' }
   ]
}
*/
//outra forma de usar objetos e array juntos
let jogo1 = {
   nome: 'Call of Duty'
}

let jogo2 = {
   nome: 'Lol'
}

let videoGame = {
   nome: 'PlayStation 5',
   valor: 3700,
   jogos: [jogo1, jogo2]
}

//para inserir após
let jogo3 = {
   nome: 'Super Mario'
}

videoGame.jogos.push(jogo3)
console.log(videoGame)

//mais uma forma de fazer com objeto dentro do objeto e com arrya
let cliente = {
   nome: 'Sany',
   ultimoPedido: {
      produto: 'Xbox',
      valor: 3000,
      jogos: [
         { nome: 'Call of Duty' },
         { nome: 'Supre Mario' },
         { nome: 'Lol',
           edicao: '1' }
      ]
   }
}
console.log(cliente)
console.log(cliente.ultimoPedido.jogos[2].edicao)