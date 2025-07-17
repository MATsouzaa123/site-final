let detalhesSaida = document.getElementById('detalhesSaida');
let btnConsultar = document.getElementById('btnConsultar');
let codInput = document.getElementById('cod');

btnConsultar.addEventListener('click', () => {
  const cod = codInput.value.trim();

  fetch(`http://localhost:8081/saida/${cod}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Saída com código ${cod} não encontrada.`);
      }
      return response.json();
    })
    .then(dados => {
      detalhesSaida.style.display = 'block';
      detalhesSaida.innerText = ''; 

      detalhesSaida.innerHTML += `Data: ${dados.data}<br>`;
      detalhesSaida.innerHTML += `Hora de saída: ${dados.horaSaida}<br>`;
      detalhesSaida.innerHTML += `Hora de retorno: ${dados.horaRetorno}<br>`;
      detalhesSaida.innerHTML += `Destino: ${dados.localDestino}<br>`;
      detalhesSaida.innerHTML += `Motivo: ${dados.motivo}<br>`;
      detalhesSaida.innerHTML += `Status: ${dados.status}<br>`;
    })
    .catch(err => {
      detalhesSaida.style.display = 'block';
      detalhesSaida.innerText = err.message;
      console.error(err);
    });
});
