var botaoLimpar = document.querySelector("#limpar");
botaoLimpar.onclick = function () {
    document.querySelector("#mensagem-traduzido").value = "";
    document.querySelector("#mensagem-do-usuario").value = "";
    var fundoPensando = document.querySelector("#mensagem-traduzido");
    fundoPensando.classList.add("pensando");
    botaoLimpar.classList.add("invisivel");
    removerFundoError();
}
