let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
   return new Promise((resolve, reject) => { 
      if(chaleiraEstaNoFogao && fogaoEstaLigado){
         console.log('começando o processo de ferver a água')
         resolve()
      }else{
         console.log('é necessário colocar o a chaleira no fogão e ligar a chama para ferver a água')
         reject()
      }
   })
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

let passarOCafe = () => console.log('passando o café')

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado).then(passarOCafe) //só posso usar o .then poque essa função retornar uma promise
console.log('fazendo o café')