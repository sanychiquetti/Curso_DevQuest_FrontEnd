function alterarCorDeFundoPrimeiroPost() {
   let posts = document.getElementsByClassName('post');
   console.log(posts)

   let primeiroPost = posts[0];
   console.log("primeiroPost", primeiroPost)
   primeiroPost.style.backgroundColor = 'gray';
}

function aumentarAFonteSegundoPost() {
   let textoPosts = document.getElementsByClassName('texto-post')

    //acessar o segundo post e adicionando mais uma classe
   textoPosts[1].classList.add('fonte-grande')

   console.log(textoPosts[1].classList)
}

function marcarRadio(genero){
   console.log(genero)
   let radioMasculino = document.getElementById('genero-masculino')

   let radioFeminino = document.getElementById('genero-feminino')
   
   if(genero === 'M') {
      radioMasculino.checked = true
   } else if(genero === 'F') {
      radioFeminino.checked = true
   }
}