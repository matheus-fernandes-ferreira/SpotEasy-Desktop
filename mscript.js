console.log('iniciou');
function adicionarRegistro() {
    // Obter os elementos do formulário
    const placa = document.getElementById('placa').value;
    const modelo = document.getElementById('modelo').value;
    const cor = document.getElementById('cor').value;   
    const tipoVeiculo = document.getElementById('form-control').value;

    // Obter a tabela
    const tabela = document.getElementById('table-registers');

    // Criar uma nova linha
    const novaLinha = tabela.insertRow();

    // Criar as células e adicionar os dados
    const celulaPlaca = novaLinha.insertCell();
    celulaPlaca.textContent = placa;

    const celulaModelo = novaLinha.insertCell();
    celulaModelo.textContent = modelo;

    const celulaCor = novaLinha.insertCell();
    celulaCor.textContent = cor;

    const celulaTipoVeiculo = novaLinha.insertCell();
    celulaTipoVeiculo.textContent = tipoVeiculo;


    // ... e assim por diante para as outras células

    const novoRegistro = {
        placa,
        modelo,
        cor,
        tipoVeiculo,
        data: new Date().toISOString() // Adicionando a data e hora do registro
    };

    // Converter o objeto para JSON e salvar no localStorage
    localStorage.setItem('registro', JSON.stringify(novoRegistro));
console.log(novoRegistro);


    // Limpar os campos do formulário (opcional)
    document.getElementById('placa').value = '';
    // ... e assim por diante para os outros campos
    console.log('click');
}

// Associar o evento ao botão "Salvar"
const botaoSalvar = document.getElementById('btn-salvar"');
botaoSalvar.addEventListener('click', adicionarRegistro);