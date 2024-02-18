let usuario = {
   nome: 'Sany', 
   excluir: function () {
      console.log('O usuário, ' + this.nome + ' foi excluído!')
   }
}

//aqui chamamos a função para ela ser executada.
usuario.excluir()