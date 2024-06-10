/*A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas. Ela também fornece o método global fetch que fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.
O fetch é um método que serve para trabalhar com API´s, e esse fetch vai retornar uma promise, e no resolve dessa promise vai ter o objeto do retorno dessa API.
Vamos nessa aula trabalhar com uma API de cartas, onde vamos criar um sisteminha de criar um baralho e selecionar uma carta aleatória do baralho.
*/

/*Apesar de a função de selecionar a carta está criada depois, devemos criar a função de escutar o evento de click, no topo do nosso código)
Então vamos criar um event listener para o botão de selecionar uma carta aleatória, onde no click do botão vou chamar a função de selecionar uma carta aleatória*/

document.getElementById('selecionar-carta').addEventListener('click', () => {
   selecionarUmaCartaAleatoriaDoBaralho() //aqui trazemos a função de selecionar a carta
})

//Criando nossa primeira função para criar o baralho embaralhado:
async function criarBaralhoEmbaralhado() {
   const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
   const resposta = await fetch(url) //colocar o await para esperar o resultado, visto que é uma promise
   /*const json = await resposta.json()
   console.log(json) //veja que ele vai printar a resposta que tem na doc, e mostra o dedk_id para seguir com as demais api´s, então podemos já colocar isso no retorno:*/
   return await resposta.json()
}

//criarBaralhoEmbaralhado() //comantei devido a próxima função

//Criando a função de selecionar a carta desse baralho:
async function selecionarUmaCarta(deck_id) { //nome do parâmetro que queromos pegar o valor na resposta
   const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1` //usamos o template literals para concatenar com a variável
   const resposta = await fetch(url)
   return await resposta.json()
}

async function selecionarUmaCartaAleatoriaDoBaralho() {
   const baralho = await criarBaralhoEmbaralhado()
   const carta = await selecionarUmaCarta(baralho.deck_id) //aqui pegamos o valor do deck_id
   console.log(carta)
   //console.log(carta.cards[0].image) //aqui localizamos o endereço da carta vamos guardar na variável:
   const imagemCarta = carta.cards[0].image
   //agora vamos mostrar uma carta na tela para isso vamos criar uma tag de imagem no html, e buscar esse elemento pelo seu id, e no src vamos colocar a variável com o valor da imagem da carta selecionada.
   document.getElementById('carta').src = imagemCarta
   //agora vamos criar um botão para selecionar a carta aleatóriamente com a tag button e criar uma função para escutar esse evento de click(foi criado no topo das funções)

}

selecionarUmaCartaAleatoriaDoBaralho()