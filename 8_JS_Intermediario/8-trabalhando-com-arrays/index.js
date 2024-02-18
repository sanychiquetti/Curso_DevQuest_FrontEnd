let frutas = ['Maçã', 'Banana', 'Pêra', 'Laranja']
let frutasTamanho = frutas.length
console.log(frutasTamanho)

// for(let i =0; i < frutasTamanho; i++){
//    console.log('Fruta: ' + frutas[i])
// }

//Podemos usar o forEach que fica bem mais fácil
// frutas.forEach(function(item){
//    console.log('Fruta: ' + item)
// })

//Vamos adicionar mais um elemento ao nosso array

frutas.push('Mamão')
console.log(frutas)

// Para retirar o ultimo elemento de nossa array use o pop
frutas.pop()
console.log(frutas)

// Para retirar o primeiro elemento do arrya usamos o shift
frutas.shift()
console.log(frutas)

// Para adicionar um elemento no ínicio do array usamos o unshift
frutas.unshift('Morango')
console.log(frutas)

// O index off pega a posição de um item no array, mas vamos colocar ele em uma 
// variável para podermos imprimir a posição
let posicaoLaranja = frutas.indexOf('Laranja')
console.log(posicaoLaranja)
