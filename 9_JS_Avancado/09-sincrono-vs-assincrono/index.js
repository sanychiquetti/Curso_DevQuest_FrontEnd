/* O que é um código sincrono e um código assincrono:
Sincrono: Ele segue um fluxo linear de nossa função, então ele só executa uma 
instrução, após a anterior ter sido executado, é como se fosse uma dependência 
de uma execução para a outra.
Assíncrona: é como se ela se descola-se do fluxo, e não vai esperar a execução 
da linha/instrução anterior, basicamente ela vai passar para a instrução seguinte
do código, sem esperar a anterior ter finalizado. Não existe essa depêndencia
como na execução sincrona.

//Forma sincrona:
function colocarAguaParaFerver() {
   console.log('colocar água para ferver')
}

function prepararParaPassarOCafe() {
   console.log('pegar o café')
   console.log('pegar o filtro de café')
   console.log('pegar a garrafa de café')
   console.log('colocar o café no filtro')
   console.log('encaixar o filtro na garrafa')
}

function passarOCafe() {
   console.log('passando o café')
}

Nessa sequência, se por acaso a função de passar o café demorar 10 minutos,
apenas, após esse tempo ela vai exacutar as demais funções, porém a função de 
passar o café deve ser executada apenas qaundo a de ferver a água acabar.
colocarAguaParaFerver()
prepararParaPassarOCafe()
passarOCafe() */

/*Por isso vamos colocar de forma assincrona essas funções: */

function colocarAguaParaFerver() {
   console.log('colocar água para ferver')

   setTimeout(() => {
      console.log('a água ferveu')
      passarOCafe()
   }, 5000)
}

function prepararParaPassarOCafe() {
   console.log('pegar o café')
   console.log('pegar o filtro de café')
   console.log('pegar a garrafa de café')
   console.log('colocar o café no filtro')
   console.log('encaixar o filtro na garrafa')
}

function passarOCafe() {
   console.log('passando o café')
}

colocarAguaParaFerver()
prepararParaPassarOCafe()