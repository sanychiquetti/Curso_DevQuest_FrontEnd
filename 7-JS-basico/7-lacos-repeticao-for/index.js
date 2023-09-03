/*
O for vai servir para executar várias vezes um mesmo comando ou declaração:
1* paramêtro -> Inicializador: ele serve para inicializarmos o contador de 
variáveis (geralmente se usa o i como variável nesse caso) fazendo um loop, 
2* paramêtro ->Condição: aqui vai ter uma expressão, que vai ser avalia a cada interação 
do loop, se o resultado dessa expressão for true, essa declaração(que vai vir dentro
do for) ela vai ser executada; 
3* paramêtro ->Incremento: Aqui vamos incrementar com + 1, essa variável a cada interação com a 
variável, até chegar na condição definida no segundo paramêtro.
Declaração -> Ela quem vai ser executada.
estrutura: 
for(inicializador; condicao; incremento){
   declaração
}
*/
//leia-se variável i recebe 0 como inicializador, enquanto a condição de i for 
//menor que 5(aqui ele vai retornar true ou false), eu vou iterar mais uma vez(i++)
//e repetir a declaração até que i seja igual a 5
for(let i = 0; i < 5; i++){
   console.log(i)
}