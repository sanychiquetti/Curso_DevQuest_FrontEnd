/*
JavaScript Avançado - Promises e os métodos Promise.allSettled() e Promise.all()
Nessa aula, vamos nos aprofundar no conceito de Promises em JavaScript e aprenda sobre os métodos Promise.allSettled() e Promise.all(). 
Lembrando o que é uma Promise:
- São objetos no Javascript qe representam um valor que podem ou não estar disponível no futuro, ou seja, uma operação assíncrona e seu valor resultante.
Os status podem ser:
   -  Pending: estado inicial, nem cumprido nem rejeitado;
   -  Fulfiled: significa que a operação foi concluída com sucesso;
   -  Rejected: significa que a operação falhou. 
   
Porque são tão cruciais?
   -  Porque nos permite escrever código assíncrono de maneira mais legível e        '  gerenciável.

Porque as Promises são tão poderosas?
   -  Trata operações que não acontecem instantaneamente(como pedir uma pizza).
   -  Evita o "Callback Hell" (que é tipo queimar a boca na primeira mordida).
   -  Aumenta suas chances de ser convidado para festas de pizza

Quais os métodos para nos ajudar?
   -  Promise.all()
         Por que usa-lo? 
            -  Porque queremos todas as nossas pizzas ao mesmo tempo
            -  Mas tem que tomar cuidado, pois se uma falhar todas vão falhar...
   -  Promise.allSettled()
         Por que usa-lo?
            -  Porque mesmo que uma falhe, ainda temos as outras que serão executadas, e saberemos o resultado de todas. 

LINKS DE APOIO:

Método allSettled() - Promise.allSettled() - JavaScript | MDN (mozilla.org)
Método all() - Promise.all() - JavaScript | MDN (mozilla.org)
*/
/* Exemplo com Promise.all 
const loadUsers = async () => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve([
            { id: 1, name: "Sany" },
            { id: 2, name: "Marco" },
         ])
      }, 2000)
   })
}

const loadRepositories = async () => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve([
            { id: 1, name: "Repo 1" },
            { id: 2, name: "Repo 2" },            
         ])
      }, 2000)
   })
}
// Exemplo de sucesso: 
// const loadEvents = async () => {
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          resolve([
//             { id: 1, name: "Event 1" },
//             { id: 2, name: "Event 2" },
//          ])
//       }, 2000)
//    })
// }

// Exemplo de insucesso:
// veja que quando executamos com o .all ele traz o resultado apenas da que falhou

const loadEvents = async () => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         reject(new Error("Erro ao carregar os eventos!"))
      }, 2000)
   })
}

const loadAll = async () => {
   try {
      const result = await Promise.all([ 
         loadUsers(),
         loadRepositories(),
         loadEvents(),
      ])

      console.log(result)
   } catch (error) {
      console.log(error)
   }
}

loadAll()
*/
//Exemplo dom o Promise.allSettled
const loadUsers = async () => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve([
            { id: 1, name: "Sany" },
            { id: 2, name: "Marco" },
         ])
      }, 2000)
   })
}

const loadRepositories = async () => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve([
            { id: 1, name: "Repo 1" },
            { id: 2, name: "Repo 2" },            
         ])
      }, 2000)
   })
}

//exemplo de sucesso(poderia ser em qualer outra função)
const loadEvents = async () => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve([
            { id: 1, name: "Event 1" },
            { id: 2, name: "Event 2" },
         ])
      }, 2000)
   })
}

//exemplo de insucesso:
// const loadEvents = async () => {
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          reject(new Error("Erro ao carregar os eventos!"))
//       }, 2000)
//    })
// }

const loadAll = async () => {
   try {
      const result = await Promise.allSettled([  //só mudar aqui a chamada dele
         loadUsers(),
         loadRepositories(),
         loadEvents(),
      ])

      console.log(JSON.stringify(result)) //aqui ele mostra o valor do resultado
   } catch (error) {
      console.log(error)
   }
}

loadAll()