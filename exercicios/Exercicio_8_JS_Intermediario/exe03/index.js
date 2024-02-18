let quadrado = document.querySelector('.quadrado')

quadrado.addEventListener('click', () => {
   let verificarNovaCorExiste = quadrado.classList.contains('novaCor')

   if (verificarNovaCorExiste) {
      quadrado.classList.remove('novaCor')
   } else {
      quadrado.classList.add('novaCor')
   }
})