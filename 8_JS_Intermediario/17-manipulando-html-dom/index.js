function adicionarComentario() {
   let inputComentario = document.getElementsByName('novo-comentario');
   //vamos pegar apenas o input que queremos
   let textoDigitado = inputComentario[0].value;
   
   let novosComentarios = document.getElementById('novos-comentarios');
   //o += vai acrescentar cada comentário adicionado
   novosComentarios.innerHTML += `<p>Novo comentário: ${textoDigitado} </p>`
}