const botaoGerarNovoConselho = document.querySelector('.btn-novo-conselho')
const idDoConselho = document.querySelector('.id-conselho')
const descricaoDoConselho = document.querySelector('.conselho')

async function gerarConselho() {
   try {
      const response = await fetch('https://api.adviceslip.com/advice')

      if(!response.ok){
         throw new Error('Ocorreu um erro ao gerar novo conselho. Tente novamente!')
      }
      const responseConselho = await response.json()
      const idConselho = `Advice #${responseConselho.slip.id}`
      const textoConselho = `"${responseConselho.slip.advice}"`
      
      idDoConselho.innerText = idConselho
      descricaoDoConselho.innerText = textoConselho
   }catch (error) {
   console.error('Erro ao tentar buscar as informações da API', error)
   }
}

botaoGerarNovoConselho.addEventListener('click', gerarConselho)

gerarConselho()