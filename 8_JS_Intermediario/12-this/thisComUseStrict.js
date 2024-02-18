//O this funciona com escopos, que pode ser global ou local
'use strict'
/*console.log(this) //escopo global
console.log(window) //escopo global
console.log(window === this) //escopo global*/

//this em escopo local quando não colocamos o 'use strict' o this vaza do escopo da função
/*this.name = 'Sany'
function saudar() {
   console.log(' this no contexto da função', this)
   console.log('Olá, ' + this.name)
}
saudar()*/
/*
this.name = 'Sany'
function saudar() {
   console.log(' this no contexto da função', this)
   console.log('Olá, ' + this.name)
}
saudar()*/

//para usar o this no método dentro do objeto
/*let usuario = {
   nome: 'Sany',
   saudar: function () {
      console.log('this no contexto do método', this)

      console.log('this.nome no contexto do método', this.nome)
   }
}
usuario.saudar()*/

//inserindo uma função dentro do objeto após estar criado
/*
let comida = {
   nome: 'Brócolis',
   temperatura: 0,
}
comida.cozinhar = function(comidaParaCozinhar, temperaturaParaCozimento) {
      comidaParaCozinhar.temperatura = temperaturaParaCozimento;
}
//reescervendo esse metodo com o this, ondo o this já substitui a variável
comida.cozinhar = function(temperaturaParaCozimento){
   console.log('this no contexto do objeto comida', this)
   this.temperatura = temperaturaParaCozimento;
}
*/

//para inserir a função dentro do objeto ficaria assim
let comida = {
   nome: 'Brócolis',
   temperatura: 0,
   cozinhar: function(temperaturaParaCozimento){
   console.log('this no contexto do objeto comida', this)
   this.temperatura = temperaturaParaCozimento;
   }
}
comida.cozinhar(100)

console.log(comida)
