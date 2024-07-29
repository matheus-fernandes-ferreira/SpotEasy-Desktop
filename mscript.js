console.log('iniciou');

const form = document.getElementById('formulario-veiculos');
const tabela = document.getElementById('tabelaVeiculos');
const tbody = tabela.querySelector('tbody');

// Função para salvar os dados no localStorage
function salvarDados() {
    const linhas = tabela.querySelectorAll('tr');
    const dados = [];

    linhas.forEach(linha => {
        const celulas = linha.querySelectorAll('td');
        const dadosVeiculo = {
            placa: celulas[0].textContent,
            modelo: celulas[1].textContent,
            cor: celulas[2].textContent,
            tipo: celulas[3].textContent,
            horaEntrada: celulas[4].textContent
        };
        dados.push(dadosVeiculo);
    });

    localStorage.setItem('veiculos', JSON.stringify(dados));
}

// Função para carregar os dados do localStorage
function carregarDados() {
    const dadosString = localStorage.getItem('veiculos');
    if (dadosString) {
        const dados = JSON.parse(dadosString);
        dados.forEach(veiculo => {
            const novaLinha = document.createElement('tr');
            novaLinha.innerHTML = `
          <td>${veiculo.placa}</td>
          <td>${veiculo.modelo}</td>
          <td>${veiculo.cor}</td>
          <td>${veiculo.tipo}</td>
          <td>${veiculo.horaEntrada}</td>
          <td></td>
        `;
            tbody.appendChild(novaLinha);
        });
    }
}
// carregarDados();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Capturar os dados do formulário
    const placa = document.getElementById('placa').value;
    const modelo = document.getElementById('modelo').value;
    const cor = document.getElementById('cor').value;
    const tipo = document.getElementById('tipo').value;
    const horaEntrada = new Date().toLocaleString(); // Obter a hora atual

    const campoData = document.getElementById('campoData');
    const campoHora = document.getElementById('campoHora');

    function obterDataHoraAtual() {
        const dataAtual = new Date();
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        const optionsHora = { hour: 'numeric', minute: 'numeric', second: 'numeric' };

        const dataFormatada = dataAtual.toLocaleDateString('pt-BR', options); // Adapte o locale para o seu formato desejado
        const horaFormatada = dataAtual.toLocaleTimeString('pt-BR', optionsHora);

        return { dataFormatada, horaFormatada };
    }


    // Criar uma nova linha
    const novaLinha = document.createElement('tr');

    // Criar as células e adicionar os dados
    novaLinha.innerHTML = `
        <td>${placa}</td>
        <td>${modelo}</td>
        <td>${cor}</td>
        <td>${tipo}</td>
        <td>${horaEntrada}</td>
        <td></td>
    `;

    // Adicionar a nova linha à tabela
    tbody.appendChild(novaLinha);

    salvarDados();

    // Limpar o formulário
    // form.reset();
});









// function adicionarRegistro() {
//     // Obter os elementos do formulário
//     const placa = document.getElementById('placa').value;
//     const modelo = document.getElementById('modelo').value;
//     const cor = document.getElementById('cor').value;
//     const tipoVeiculo = document.getElementById('form-control').value;

//     // Obter a tabela
//     const tabela = document.getElementById('table-registers');

//     // Criar uma nova linha
//     const novaLinha = tabela.insertRow();

//     // Criar as células e adicionar os dados
//     const celulaPlaca = novaLinha.insertCell();
//     celulaPlaca.textContent = placa;

//     const celulaModelo = novaLinha.insertCell();
//     celulaModelo.textContent = modelo;

//     const celulaCor = novaLinha.insertCell();
//     celulaCor.textContent = cor;

//     const celulaTipoVeiculo = novaLinha.insertCell();
//     celulaTipoVeiculo.textContent = tipoVeiculo;


//     // ... e assim por diante para as outras células

//     const novoRegistro = {
//         placa,
//         modelo,
//         cor,
//         tipoVeiculo,
//         data: new Date().toISOString() // Adicionando a data e hora do registro
//     };

//     // Converter o objeto para JSON e salvar no localStorage
//     localStorage.setItem('registro', JSON.stringify(novoRegistro));
//     console.log(novoRegistro);


//     // Limpar os campos do formulário (opcional)
//     document.getElementById('placa').value = '';
//     // ... e assim por diante para os outros campos
//     console.log('click');
// }

// // Associar o evento ao botão "Salvar"
// const botaoSalvar = document.getElementById('btn-salvar"');
// botaoSalvar.addEventListener('click', adicionarRegistro);