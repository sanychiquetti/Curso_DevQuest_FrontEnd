/*
Tipos de scopo que existem no JS
- Scopo de bloco: 
     Um bloco de código no Js define um scopo local para variáveis criadas com 
     'const' e 'let', o mesmo acontece com o 'if', 'while' e 'for'.
     Já com a variável 'var' ela é acessada dentro e fora do scopo 
   Exemplo:
   if (true) {
   const mensagem = 'Olá' //aqui ela fica apenas dentro do escopo
   }
   console.log(mensagem) // como está sendo chamado fora do scopo, não irá apresentar 
   a mensagem.

- Scopo autonômo:
   As variáveis 'const' e 'let' criadas dentro de {}, também delimitando um scopo, as variáveis só podem ser acessadas e chamadas 
   dentro do scopo.
   Já a variável 'var' ela é acessivel dentro e fora do scopo.
   Exemplo:
   {
      let mensagem = 'Olá' //se eu colocasse: var mensagem = 'Olá', aí ela apareceria, nas duas chamadas, dentro e fora do scopo 
      console.log(mensagem) // aqui ela será chamada
   }
   console.log(mensagem) // aqui não será chamada, pois está fora do scopo

- Scopo de função:
   Uma função Js definem um scopo para variável escrita com 'const', 'let' e 'var'
   então na função até a var só fica acessivel dentro da função. 
   Exemplo:
   function falar(){
      var mensagem = 'Olá Mundo!'
      console.log(mensagem)
   }
   falar() // aqui aparece pois é parte da função, onde a função é chamada
   console.log(mensagem) // não irá aparecer mesmo sendo uma 'var'

   O mesmo acontece quando temos uma função dentro de outra função, ela só vai ficar acessivel
   dentro da função que ela foi criada:
   Exemplo:
      function falar(){
        var mensagem = 'Olá Mundo!'
        console.log(mensagem)
        function falarOutraCoisa(){
          var outraMensagem = 'Tchau Mundo!!'
        }
      falarOutraCoisa()
      console.log(falarOutraCoisa)
   }
   falar()
   console.log(falarOutraCoisa)

- Scopo global:
   É o scopo mais externo de todos, sendo acessível dentro que qualquer outro scopo
   tanto local, quanto de função.. 
   Exemplo:
   Podemos criar dentro do html um script com uma variavel let e ela será acessivel globalmente
      <script>
         let url = 'https://www.youtube.com'
      </script>
*/
console.log(url) //aqui a variável url que criei no html poderá ser acessada de qualquer lugar de nosso código.
/* 
Se eu quiser que uma várivel seja acessivel, posso apenas declarar fora de uma scopo:
let numero1 = 123   // declarando fora será acessivel em qualquer lugar dentro desse arquivo. 
   function falar(){
      var mensagem = 'Olá Mundo!'
      console.log(numero) // chamando a variável dentro do scopo
   }
   falar() 
   console.log(numero) //chamando a variável fora do scopo
*/


