/* O setInterval e o setTimeOut são duas funções bem básicas de executar
 código de forma assincronamente, depois de um determinado período de tempo
tenha passado ou em um intervalod de tempo, tipo a cada 2 segundos, e ambas
são  higher order functions, porque recebem funções como parâmetros, que são
os callbacks
A diferença entre as duas são:
O setTimeout vai executar um bloco de código expecífico depois de um determinado
período de tempo.
O setInterval vai executar o bloco repetidamente em um intervalo de tempo*/

/* SetTimout (primeiro argumento a função a ser executada e o segundo argumento
o tempo em milessegundos)
estrutura do setTimeout:
setTimeour(function(){}, timeout)
*/
// setTimeout(() => {
//    alert('Você ainda está aqui?')
// }, 3000) // após 3 segundos a mensagem será exibida na tela

/* O setInterval 
estrutura do setInterval:
setInterval(function(){}, interval) 
*/
// setInterval(() => {
//    console.log('Executando a cada 2 segundos')
// }, 2000)

/*Esses comandos são assincronos, se tver algum outro código, ele irá executar 
esse outro código primeiro para depois executa-los*/
// setTimeout(() => {
//    console.log('console dentro do setTimeout') //executa esse apenas após o outro comando
// }, 4000)

// console.log('console depois do setTimeout') //executa primeiro esse código... 

/* Nós conseguimos limpar esses comandos, parando a execução do setInterval
 por exemplo, para isso precisamos pegar o id do setInterval, usando uma variável*/

const idDoIntervalo = setInterval(() => {
                        console.log('Executando a cada 2 segundos')
                     }, 2000)
console.log(idDoIntervalo)
clearInterval(idDoIntervalo) //dessa forma ele não vai imprimir a função (poderia usar no setTimou, o clear setTimout)