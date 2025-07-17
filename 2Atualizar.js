let atualizar = document.getElementById('atualizar')
let res = document.getElementById('res')

atualizar.addEventListener('click', () => {
  let nome = document.getElementById('nome').value
  let sobrenome = document.getElementById('sobrenome').value
  let email = document.getElementById('email').value
  let telefone = document.getElementById('telefone').value
  let matricula = document.getElementById('matricula').value

  const valores = {
    nome: nome,
    sobrenome: sobrenome,
    email: email,
    telefone: telefone,
    matricula: matricula
  }

  fetch(`http://localhost:8081/aluno/${matricula}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(valores)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      res.innerHTML = `Aluno atualizado com sucesso! <br>`
    })
    .catch((err) => {
      console.error(err)
      res.innerHTML = 'Erro ao atualizar o aluno.'
    })
})
