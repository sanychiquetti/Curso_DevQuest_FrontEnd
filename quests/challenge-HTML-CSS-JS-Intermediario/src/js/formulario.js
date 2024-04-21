const botaoEnviarFormulario = document.getElementById("enviar-formulario")

botaoEnviarFormulario.addEventListener("click", function () {

    const inputs = document.querySelectorAll(".input")
    let msg = document.querySelectorAll(".msg-campo-obrigatorio")

    inputs.forEach(function (input, index) {

        if (input.value == "") {
            input.classList.add("input-nao-preechido")
            input.classList.remove("input-preechido")
            msg[index].classList.add("msg-nao-preechido")

        } else {
            input.classList.add("input-preechido")
            msg[index].classList.remove("msg-nao-preechido")
        }
    })

})