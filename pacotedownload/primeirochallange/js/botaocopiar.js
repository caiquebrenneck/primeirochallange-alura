var botaoCopiar = document.querySelector("#copiar");
botaoCopiar.onclick = function () {
    var copiarTexto = document.querySelector("#mensagem-traduzido").value;
    navigator.clipboard.writeText(copiarTexto);
}
