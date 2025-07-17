let res = document.getElementById('res')
let btnConfirmar = document.getElementById('btnConfirmar')

btnConfirmar.addEventListener('click', (e) => {
e.preventDefault()

    let cod = document.getElementById('cod').value
    if(!cod){
        alert('Informe um ID válido para deletar')
        return
    }
    fetch(`http://localhost:8081/professor/${cod}` , {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok){
            res.innerHTML = ` aluno ${cod} deletado com sucesso`
        }else{
            return response.json()
            .then(errBody => {
                throw new Error(errBody.message || response.statusText)
            })
        }
    })
    .catch(err => {
        console.error('Erro ao deletar cod do professor', err)
        res.innerHTML = `Falha ao deletar professor da face da terra ${err.mensage}`
    })
})