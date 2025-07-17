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

  fetch(`http://localhost:8081/professor/${matricula}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(valores)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      res.innerHTML = `Professor atualizado com sucesso! <br>`
    })
    .catch((err) => {
      console.error(err)
      res.innerHTML = 'Erro ao atualizar o Professor.'
    })
})

let matriculaPuxar = document.getElementById('matricula')

matriculaPuxar.addEventListener('blur', () => {
  let matricula = matriculaPuxar.value.trim()
  if (!matricula) return

  fetch(`http://localhost:8081/professor/${matricula}`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Professor não encontrado')
      }
      return res.json()
    })
    .then(data => {
      document.getElementById('nome').value = data.nome || ''
      document.getElementById('sobrenome').value = data.sobrenome || ''
      document.getElementById('email').value = data.email || ''
      document.getElementById('telefone').value = data.telefone || ''
      res.innerHTML = ' '
    })
    .catch((err) => {
      console.error(err)
      res.innerHTML = 'Erro ao carregar dados do professor.'
    })
})

