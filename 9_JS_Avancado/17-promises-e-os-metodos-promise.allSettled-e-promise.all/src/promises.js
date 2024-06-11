// Exemplo com Promise.all 
const loadUsers = async (username) => {
   const response = await fetch(`https://api.github.com/users/${username}`)

   if (!response.ok) {
      throw new Error(`GitHub API returned status code ${response.status}`)
   }

   const user = await response.json() //aqui estamos transformando nosso response em json para retornar ele pro usuário 

   return user
}

const loadRepositories = async (username) => {
   const response = await fetch(`https://api.github.com/users/${username}/repos`)

   if (!response.ok) {
      throw new Error(`GitHub API returned status code ${response.status}`)
   }

   const repositories = await response.json()
   return repositories.map((repo) => ({ id: repo.id, name: repo.name })) //estou definindo o que vai retornar
}
// Exemplo de insucesso: 
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

// Exemplo de sucesso:
// veja que quando executamos com o .all ele traz o resultado apenas da que falhou

const loadEvents = async (username) => {
   const response = await fetch(`https://api.github.com/users/${username}/events`)

   if (!response.ok) {
      throw new Error(`GitHub API returned status code ${response.status}`)
   }

   const events = await response.json()
   return events.map((event) => ({ id: event.id, name: event.type }))
}

const loadAll = async () => {
   try {
      const result = await Promise.allSettled([ 
         loadUsers("sanychiquetti"),
         loadRepositories("sanychiquetti"),
         loadEvents("sanychiquetti"),
      ])

      console.log(result)
   } catch (error) {
      console.log(error)
   }
}

loadAll()
/*
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
*/