/*
While quer dizer enquanto, então ele quer dizer enquanto a condição for false, 
contine a executar o bloco de repetição
o while faz o teste lógico no inicio da execução, primeiro ele verifica, depois executa
estrutura:
while(condicao){
   <bloco de execucao>
}
*/
let a = 10
let b = 15

//aqui estamos pedindo para escrever incrementando a variável a até que 
//a seja o mesmo valor que b;
while(a < b){
   console.log('incrementando a variável a' + a)
   a++;
}

/* a principal diferença do while para do while, é  que no do while, ele primeiro 
excuta o código para depois verificar a condição ou seja a lógica - primeiro executa, depois verifica
estrutura:
do{
   <bloco de execucao>
}while(condicao)
*/
var i = 1 // declaro a variável
do{
   'entrou ' + i
}while(i <= 5)