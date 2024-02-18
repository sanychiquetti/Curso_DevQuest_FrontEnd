//quando abrimos e fechamos as chaves já estamos instanciando um objeto, e dentro desse objeto inserimos as 
//propriedades que podem ser as características, como no exemplo, onde temos a chave e o valor dessa chave
let tenis = {
   //chave: valor
   cor: 'branco',      //string
   tamanho: 38 ,      // inteiro
   emEstoque: true   //boleano
}
console.log(tenis)

//para acessar uma propriedade dentro de um objeto, ele vai mostrar apenas o valor da chave selecionada
console.log(tenis.tamanho)

//podemos adicionar uma propriedade para esse objeto após criado
tenis.valor = 200
console.log(tenis)