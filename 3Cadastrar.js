let res = document.getElementById('res');
let cadastrar = document.getElementById('Cadastrar');

cadastrar.addEventListener('click', (e) => {
    e.preventDefault();

    let data = document.getElementById('dataSolicitacao').value;
    let horaSaida = document.getElementById('horaSaida').value;
    let horaVolta = document.getElementById('horaRetorno').value;
    let motivo = document.getElementById('motivo').value;
    let local = document.getElementById('localDestino').value;
    let status = document.getElementById('status').value;
    let nomeAluno = document.getElementById('nomeAluno').value;
    let nomeProfessor = document.getElementById('nomeProfessor').value;
    let codAluno = Number(document.getElementById('aluno_cod').value);
    let codProfessor = Number(document.getElementById('professor_cod').value);

    const valores = {
        dataSolicitacao: data,
        horaSaida: horaSaida,
        horaRetorno: horaVolta,
        motivo: motivo,
        localDestino: local,
        status: status,
        nomeAluno: nomeAluno,
        nomeProfessor: nomeProfessor,
        aluno_cod: codAluno,
        professor_cod: codProfessor
    };

    console.log(valores);

    fetch(`http://localhost:8081/saida`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(valores)
    })
    .then(resp => {
        if (!resp.ok) throw new Error('Erro na requisição');
        return resp.json();
    })
    .then(data => {
        console.log(data);
        res.innerHTML = '<h2 style="color: green;">SAÍDA CADASTRADA COM SUCESSO !!!</h2>';
        res.style.fontSize = '33px';
        res.style.fontWeight = 'bold';
    })
    .catch(err => {
        console.error(err);
        res.innerHTML = '<h2 style="color: red;">ERRO AO CADASTRAR SAÍDA</h2>';
        res.style.fontSize = '30px';
        res.style.fontWeight = 'bold';
    });
});
