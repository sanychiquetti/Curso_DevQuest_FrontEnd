let btnTrocarCor = document.getElementById('btnTrocarCor')

let quadradoAzul = document.querySelector('.azul')

btnTrocarCor.addEventListener('click', trocarDeCor)

function trocarDeCor(){
   quadradoAzul.classList.remove('azul')
   quadradoAzul.classList.add('pink')
}