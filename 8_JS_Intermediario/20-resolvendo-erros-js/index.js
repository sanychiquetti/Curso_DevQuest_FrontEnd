let valorBoleto = 100

console.log(valorBoleto)
//console.log(valorBolet) // ele vai mostrar o erro no console, e dizer que erro é

let inputTelefone = document.getElementById('telefone')

console.log(inputTelefone)
inputTelefone.disabled = true; //vai  desabilitar o campo

//se inserimos uma fucnção no html mas não a declararmos no js, ele estou um erro
//por isso precisa declarar no js, mas mos que deixe vazia
function habilitarTelefone() {
   let inputTelefone = document.getElementById('telefone')
   inputTelefone.disabled = false
}