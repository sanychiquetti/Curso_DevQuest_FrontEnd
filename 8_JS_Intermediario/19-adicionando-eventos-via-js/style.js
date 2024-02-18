/*let selectEstado = document.querySelector("select[name='estado']")

selectEstado.addEventListener("change", function () {
  alert("Mudou o estado")
})
console.log(selectEstado)*/

//outra forma de fazer a mesmo coisa, mas de forma encadeada:
document
   .querySelector("select[name='estado']")
   .addEventListener("change", function (event) {
      alert("Mudou o Estado") // adicionando uma ação de alerta
      console.log(event.target.value) //mostrando no console o valor do campo selecionado
   })
