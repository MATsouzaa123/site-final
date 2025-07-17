let btnListar = document.getElementById('btnListar')
let res = document.getElementById('res')

btnListar.addEventListener('click', () => {
  fetch(`http://localhost:8081/aluno`)
    .then(response => response.json())
    .then(dados => {
      
      res.innerHTML = '' 
      
      dados.forEach(e => {

        res.innerHTML += `ID: ${e.codAluno}<br>`
        res.innerHTML += `nome: ${e.nome}<br>`
        res.innerHTML += `sobrenome: ${e.sobrenome}<br>`
        res.innerHTML += `email: ${e.email}<br>`
        res.innerHTML += `telefone: ${e.telefone}<br>`
        res.innerHTML += `matricula: ${e.matricula}<br><br>`
      })
    })
    .catch((err) => {
      console.error('dados inválidos!!!', err)
      res.innerHTML = 'Erro ao buscar alunos.'
    })
})
