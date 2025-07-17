let res = document.getElementById('res');
let Cadastrar = document.getElementById('Cadastrar');

Cadastrar.addEventListener('click', () => {
  let nome = document.getElementById('nome');
  let sobrenome = document.getElementById('sobrenome');
  let email = document.getElementById('email');
  let telefone = document.getElementById('telefone');
  let matricula = document.getElementById('matricula');

  const valores = {
    nome: nome.value,
    sobrenome: sobrenome.value,
    email: email.value,
    telefone: telefone.value,
    matricula: matricula.value
  };

  fetch(`http://localhost:8081/aluno`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(valores)
  })
    .then(res => res.json())
    .then(dados => {
      console.log(dados);
      res.innerHTML = `
        <p><strong>Aluno cadastrado com sucesso!</strong></p>
        <p>Nome: ${dados.nome}</p>
        <p>Sobrenome: ${dados.sobrenome}</p>
        <p>Email: ${dados.email}</p>
        <p>Telefone: ${dados.telefone}</p>
        <p>Matrícula: ${dados.matricula}</p>
      `;
    })
    .catch(erro => {
      res.innerHTML = `<p style="color:red">Erro ao cadastrar aluno!</p>`;
      console.error('Erro:', erro);
    });
});
