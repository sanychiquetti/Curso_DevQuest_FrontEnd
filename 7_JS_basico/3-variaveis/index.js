//variáveis não podem ser escritas com espaço, elas tem que estar todas juntas, e o melhor é colocar as palavras seguintes com a letra maiúscula
var nomePessoa  = 'Sany' 

//a variável const ela não pode ser mais alterada, pois ela é constante!
const emailPessoa = 'sanymara@icloud.com'

//a variável let - ela é parecida com o var, pode variar seu valor, porém se ela for declarada dentro de um scopo, ela não será lida qdo chamadda fora desse escopo.
let telefonePessoa = '551198965321'

//Exemplo de escopo:
{
   var nomePessoa = "Sany"
   
   const emailPessoa = "sany@hotmail.com"
   
   let telefonePessoa = '5511989655421'
   }
   
   console.log(nomePessoa)
   console.log(emailPessoa)
   console.log(telefonePessoa)
   
   //Será mostrado apenas a var na tela, o const e o let não vão aparecer, pois estão dentro dos colchetes, ou seja escopo.