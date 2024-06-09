/* 
JavaScript Avançado - Async e Await (É MAIS MODERNO QUE O THEN)
Quando uma função assíncrona é chamada, ela retorna uma Promise. Quando a função assíncrona retorna um valor, a Promise será resolvida com o valor retornado. Quando a função assíncrona lança uma exceção ou algum valor, a Promise será rejeitada com o valor lançado.

Uma função assíncrona pode conter uma expressão await, que pausa a execução da função assíncrona e espera pela resolução da Promise passada, e depois retoma a execução da função assíncrona e retorna o valor resolvido.

Link de apoio:

Funções assíncronas = https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function
*/
let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {
    if (chaleiraEstaNoFogao && fogaoEstaLigado) {
      resolve()
      console.log("A água foi fervida")
    } else {
      reject()
      console.log(
        "É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água"
      )
    }
  })
}

let passarCafe = (aguaFervida) => {
  return new Promise(function (resolve) {
    console.log("Passando o café")
    resolve(true)
  })
}

let tomarCafe = (cafePassado) => {
  return new Promise(function (resolve) {
    console.log("Tomando o café")
    resolve(true)
  })
}

let lavarXicara = (cafeTomado) => {
  return new Promise(function (resolve) {
    console.log("Lavando a xícara")
    resolve(true)
  })
}

/* 
>>> USANDO O THEN, COMO NA AULA PASSADA:

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
  .then(passarCafe)
  .then(tomarCafe)
  .then(lavarXicara)

>>> USANDO ASYNC E AWAIT: O AWAIT DEVE SER USADO LOGO NA CHAMADA SEGUINTE DA FUNÇÃO, AWAIT QUER DIZER ESPERAR, ENTÃO ELE VAI ESPERAR A FUNÇÃO ACABAR PARA MOSTRAR O RESULTADO E PASSAR PARA A PRÓXIMA FUNÇÃO. 
*/

async function fazerCafe() {
  const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado) //O AWAIT VAI ESPEAR A FUNÇÃO TERMINAR PARA NOS DAR O RESULTADO
  const cafePassado = await passarCafe(aguaFervida)
  const cafeTomado = await tomarCafe(cafePassado)
  const xicaraLavada = await lavarXicara(cafeTomado)
  if(xicaraLavada) console.log('Finalizado o ritual de tomar café')
}

fazerCafe()
