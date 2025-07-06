
function abrirPopup() {
    document.getElementById("popup").style.display = "block";
}

function fecharPopup() {
    document.getElementById("popup").style.display = "none";
}

function alternarTema() {
    const body = document.body;
    const botao = document.getElementById("btn-tema");

    body.classList.toggle("modo-escuro");

    if (body.classList.contains("modo-escuro")) {
        botao.textContent = "☀️ Modo claro";
    } else {
        botao.textContent = "🌙 Modo escuro";
    }
}