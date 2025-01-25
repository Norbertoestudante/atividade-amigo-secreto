let amigos = [];

function adicionarAmigo() {

    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    if (nome === '') {
        alert("Nome inválido, por favor insira um nome");
        return;
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