function calcularFatorial(numero) {
   let resultado = 1

   for(let i = 1; i <= numero; i++) {
     console.log(`O valor de i é: ${i}`) 
     resultado *= i //aqui é um atalho para: resultado = resultado * i (uma forma de fazer fatorial)
     console.log(`O valor do resultado é: ${resultado}`) 
   }
   return resultado
}

function imprimirFatorial(numero) {
   const ehNumeroNegativo = numero < 0
   if(ehNumeroNegativo){
      console.log('Não é possível calcular o fatorial de um número negativo')
   }else{
      const fatorial = calcularFatorial(numero)
      console.log(`O fatorial de ${numero} é ${fatorial}`)
   }
}

const numero = 5
imprimirFatorial(numero)