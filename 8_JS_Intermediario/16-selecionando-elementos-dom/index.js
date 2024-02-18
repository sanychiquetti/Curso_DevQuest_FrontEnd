console.log(document.body)

//Formas de buscar um elemento manipulando o DOM
let p = document.getElementById('paragrafo1')
console.log(p)

//pegando pela classe
let inpusPorClasse = document.getElementsByClassName('tag-de-input');
console.log(inpusPorClasse[0])

//pelo nome da tag
let inputPorTag = document.getElementsByTagName('input')
console.log(inputPorTag)

//pelo h1
let buscarPeloH1 = document.getElementsByTagName('h1')
console.log(buscarPeloH1)

//pelo atributo name
let inputPorname = document.querySelectorAll('input[name="email"]')
console.log(inputPorname)
console.log(inputPorname[0])