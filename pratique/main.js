const form = document.getElementById('form-atividade');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const InputNomeContato = document.getElementById('nome-contato');
    const InputNumeroCliente = document.getElementById('numero-cliente');  
    alert(`Nome do contato: ${InputNomeContato.value} - Número do cliente: ${InputNumeroCliente.value}`); 

    let linha = '<tr>';
    linha += `<td>${InputNomeContato.value}</td>`;
    linha += `<td>${InputNumeroCliente.value}</td>`;
    linha += '</tr>';

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML += linha;

})