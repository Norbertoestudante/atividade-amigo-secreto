let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {

    // Captura o valor do campo de entrada
    const input = document.getElementById("amigo");
    const nome = input.value.trim(); // Remove espaços em branco extras

    // Valida se o campo está vazio
    if (nome === '') {
        alert("Nome inválido, por favor insira um nome"); // Exibe uma mensagem de err
        return; // Interrompe a execução da função
    }

    adicionarPessoa(nome);
}

function adicionarPessoa(nome) {
    amigos.push(nome);
    const lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('lista vazia, por favor adicione pessoas!');
        return;
    }
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo Sorteado: ${amigoSorteado}</li>`;
}