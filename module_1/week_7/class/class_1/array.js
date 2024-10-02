const numbers = [0,10,21,32,43,54,65,76,87,98]

const growing = [...numbers].sort((a,b) => a-b) //ordena crescente
const decreasing = [...numbers].sort((a,b) => b-a) //ordena decrescente

console.log('growing', growing)
console.log('decreasing', decreasing)


// Objetos
// const aluno = {
//   name: '',
//   class: '',
//   email: ''
// }

// aluno.name = prompt(`Digite seu nome`)
// aluno.class = prompt(`Informe sua turma`)
// aluno.email =prompt(`Informe seu email`)

// console.log(`aluno`, aluno)