const campoTexto = document.querySelectorAll(".campoTexto")

campoTexto.forEach(input => {
  input.addEventListener("change", () => {
    if (input.value !== "") {
      input.classList.add("novaCor")
    } else {
      input.classList.remove("novaCor")
    }
  })
})
