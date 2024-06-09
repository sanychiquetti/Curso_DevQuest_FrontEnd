//como fazemos anteriormente:
// const imprimirInformacoesPessoas = (primeiroNome, ultimoNome, idade) => {
//    return "Primeiro Nome: " + primeiroNome + ", Último Nome: " + ultimoNome + ", Idade: " + idade;
// }

//para interpolar de forma mais fácil com o templet literals:
const imprimirInformacoesPessoas = (primeiroNome, ultimoNome, idade) => {
      return `Primeiro Nome: ${primeiroNome}, Último Nome: ${ultimoNome}, Idade: ${idade}`
}

//console.log(imprimirInformacoesPessoas ("Sany", "Garcia", 46))

//Podemos tb dentro do console.log chamar uma função e concatenar com algum texto:
console.log(`${imprimirInformacoesPessoas('Sany', 'Garcia', 46)}, ela é uma QA`)

//posso fazer uma soma tb dentro de um texto:
console.log(`Soma ${10 + 30}`)