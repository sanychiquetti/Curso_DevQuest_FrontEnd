//Sintax do parâmetro REST:

/* funcion(a, b, ...arg) { //com a reticências colocamos todos os outros parâmetros que vão ser passados para essa função, em forma de array 
      //...
   } 

function incentivarQuester(mensagem, nomeQuester ){
   console.log(`${mensagem} ${nomeQuester}`)
}

incentivarQuester('Parabéns por chegar ao módulo de JavaScript avançado,', 'Sany') */

/*Agora vamos fazer de forma que vamos mandar a mensagem para vários quester´s: */

function incentivarQuester(mensagem, ...nomesQuesters ){ //ele precisa ser declarado por último, não importa quantos parâmentros vamos colocar
   nomesQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))
}

incentivarQuester('Parabéns por chegar ao módulo de JavaScript avançado,', 'Sany', 'Marco', 'Cler', 'Eduardo')
