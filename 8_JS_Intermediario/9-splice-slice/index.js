//estrutura: frutas.slice(indice, count)

let frutas = ['Banana','Amora','Manga','Abacaxi', 'Abacate', 'Limão']

//vai começar na posição 1 e terminar na posição 4, porém exclui a posição 4, ele vai até a 4
//let frutasExtraidas = frutas.slice(1,4)
//console.log(frutasExtraidas)

//se eu colocar apenas um parâmetro ele pega daquele parâmetro até o final
// let frutasExtraidas2 = frutas.slice(2)
// console.log(frutasExtraidas2)

//splice é bom quando queremos trabalhr com elementos no meio do array
//quero remover Manga e Abacaxi, vamos colocar a partir de qual item e quantos itens
// let frutasExtraidas3 = frutas.splice(1, 3)
// console.log(frutasExtraidas3) //aqui ficou as extraídas
// console.log(frutas) //aqui ficou sem as que tiramos com o splice

//aqui podemos fazer em apenas um comando a remoção e adição de novos itens
let removeEAdicionaFrutas = frutas.splice(1, 2, 'Goiaba', 'Tangerina', 'Pêssego')
console.log(removeEAdicionaFrutas)
console.log(frutas)