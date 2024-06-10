/* Para tratarmos erros vamos usar o try, que quer dizer tente executar, esse bloco de código...
Depois colocamo o catch que irá fazer o tratamento do erro, para não estourar uma mensagem em vermelho no console, e mostrar a mensagem do erro
E depois colocamos o finally que irá finalizar o tratamento e apresentar o resultado, ele irá rodar independente se der erro ou não, ele é muito indicado para usarmos para fechar um arquivos que foram abertos durante a leitura ou uma conexão com o banco de dados.
temos tb o throw para nós mesmos lançarmos uma mensagem de erro de excessão.Nesse exemplo lançamos uma validação para verificar se os parametros que vieram são do tipo booleano
no throw vc pode retornar várias possibilidades, inclusive uma função, verificar nessa documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error
*/
let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {

    if(typeof chaleiraEstaNoFogao != 'boolean') throw 'Somente o tipo booleano é aceito'

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

let chaleiraEstaNoFogao = 'true' //alterei para string
let fogaoEstaLigado = false

async function fazerCafe() {
  try{
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado) //O AWAIT VAI ESPEAR A FUNÇÃO TERMINAR PARA NOS DAR O RESULTADO
    const cafePassado = await passarCafe(aguaFervida)
    const cafeTomado = await tomarCafe(cafePassado)
    const xicaraLavada = await lavarXicara(cafeTomado)
    if(xicaraLavada) console.log('Finalizado o ritual de tomar café')
  }catch(err){
    console.log(err)
  }finally{
    console.log('Bora trabalhar!')
  }
}

fazerCafe()