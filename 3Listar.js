let btnListar = document.getElementById('btnListar');
let res = document.getElementById('res');

btnListar.addEventListener('click', () => {
  fetch(`http://localhost:8081/saida`)
    .then(response => response.json())
    .then(dados => {
      res.innerHTML = '';

      if (dados.length === 0) {
        res.innerHTML = '<p>Nenhuma saída registrada.</p>';
        return;
      }

      dados.forEach(saida => {
        res.innerHTML += `
          <div style="border: 2px dashed violet; background: #f9f9ff; padding: 15px; margin-top: 15px; border-radius: 10px; font-size: 18px;">
            Código: ${saida.codSaida}<br>
            Data de Solicitação: ${saida.dataSolicitacao}<br>
            Hora de Saída: ${saida.horaSaida}<br>
            Hora de Retorno: ${saida.horaRetorno}<br>
            Local Destino: ${saida.localDestino}<br>
            Motivo: ${saida.motivo}<br>
            Status: ${saida.status}<br>
            Nome do Aluno: ${saida.nomeAluno}<br>
            Nome do Professor: ${saida.nomeProfessor}<br>
          </div>
        `;
      });
    })
    .catch((err) => {
      console.error('Erro ao buscar dados da saída:', err);
      res.innerHTML = `<p style='color: red;'>Erro ao buscar dados da saída.</p>`;
    });
});
