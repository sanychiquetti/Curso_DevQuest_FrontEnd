/*Promises é uma maneira mais moderna de trabalhar com a sincronicidade no javascript,
A ideia das promises é trabalhar com a sincronicidade de forma sequêncial e tb vai 
facilitar o tratamento de excessões em nosso código caso de algum problema.
Promise é promessa, então estamos criando uma promessa que algo vai ser realizado ou
não. 
Elas tb resolvem um problema famoso que é o calback hell (inferno do calback), é 
basicamente ter um encadeamento de calback´s, um dentro do outro.
As promises vão ter 4 estados:
   Pendente 'É o estado iniciar de toda promisse' (quando foi criada, mas não executada)
   Realizada 'Resolve' (quando teve sucesso na execução)
   Recusada 'Reject' (quando teve algum problema na execução)
   Estabelecida (quando ela foi realizada ou recusada)
   
Como a promisse é uma classe no javascript, então escreve com a primeira letra maíuscula
new Promise((resolve, reject) =>{ //esses dois parâmetros são funções tb

}) */

//vamos criar uma função que retornaria uma promisse

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
let fogaoEstaLigado = false

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
console.log('fazendo o café')

//Iremos ver mais para frente como lidar com os erros quando cai no reject, pois isso para nossa aplicação