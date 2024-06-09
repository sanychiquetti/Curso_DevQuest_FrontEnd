/*Agora vamos encadear as funções com o uso do then
Vamos criar as funções, e encadear com o then o momento de chamar a próxima função
*/
let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
   return new Promise((resolve, reject) => { 
      if(chaleiraEstaNoFogao && fogaoEstaLigado){
         console.log('Passo 1 finalizado: Água foi fervida')
         resolve()
      }else{
         console.log('é necessário colocar o a chaleira no fogão e ligar a chama para ferver a água, senão o café não vai ficar pronto!')
         reject()
      }
   })
}

let passarOCafe = (aguaFervendo) => {
   return new Promise((resolve) => {
      console.log('Passo 2 finalizado: Café foi passado')
      resolve(true)
   })
}

let tomarCafe = (cafePassado) => {
   return new Promise((resolve) => {
      console.log('Passo 3 finalizado: Terminei de tomar o café')
      resolve(true)
   })
}

let lavarAXicara = (cafeTomado) => {
   return new Promise((resolve) => {
      console.log('Passo 4 finalizado: Terminei de lavar a xícara')
      resolve(true)
   })
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
   .then(() => { //aqui retornei uma função anonima que retonar a próxima função
      return passarOCafe()
   })
   .then(() => {
      return tomarCafe()
   })
   .then(() => {
      return lavarAXicara()
   })
   .then(() => {
      console.log('Ritual do cafezinho finalizado, vamos trabalhar')
   })
