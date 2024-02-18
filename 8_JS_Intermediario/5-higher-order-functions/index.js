//Vamos fazer uma função que vai receber 3 parâmetros e
// uma delas vai ter uma função dentro na chamada de callback

// const calcularAnoDeNascimetno = function(idade, mesDeNascimento, imprimir){
//    const mesAtual = 2
//    let anoDeNascimento = 2024 - idade
//    if(mesDeNascimento > mesAtual) anoDeNascimento-- //usando o -- estou tirando 1
//    imprimir(anoDeNascimento)
// }

// let imprimirAnoDeNascimento = anoDeNascimento => {
//    console.log('Seu ano de nascimento é: ' + anoDeNascimento)
// }

// calcularAnoDeNascimetno(46, 10, imprimirAnoDeNascimento)

//Agora exemplo de uma função que retorna outra função

function multiplicar(multiplicador){
   return function(numero){
      return numero * multiplicador
   }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)

console.log(dobrar(3))
console.log(triplicar(3))
console.log(quadruplicar(3))