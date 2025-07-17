let detalhesAluno = document.getElementById('detalhesAluno')
let btnConsultar = document.getElementById('btnConsultar')

btnConsultar.addEventListener('click', ()=> {


 fetch(`http://localhost:8081/aluno/${cod.value}`)
    .then(response  => response .json())
    .then(dados => {

        console.log(dados)

         detalhesAluno.style.display = 'block'; 

        detalhesAluno.innerHTML = `nome: ${dados.nome}<br>`
        detalhesAluno.innerHTML += `sobrenome: ${dados.sobrenome}<br>`
        detalhesAluno.innerHTML += `email: ${dados.email}<br>`
        detalhesAluno.innerHTML += `telefone: ${dados.telefone}<br>`
        detalhesAluno.innerHTML += `matricula: ${dados.matricula}<br>`

    })
    .catch (err => console.error(err))
})
