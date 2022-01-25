var botaoLimpar = document.querySelector("#limpar");
botaoLimpar.onclick = function () {
    document.querySelector("#mensagem-do-usuario").classList.remove("invalido");
    document.querySelector("#mensagem-do-usuario").classList.add("valido");
    document.querySelector("#mensagem-do-usuario").removeAttribute("disabled");
    document.querySelector("#mensagem-traduzido").value = "";
    document.querySelector("#mensagem-do-usuario").value = "";
    var fundoPensando = document.querySelector("#mensagem-traduzido");
    fundoPensando.classList.add("pensando");
    botaoLimpar.classList.add("invisivel");
    removerFundoError();
}
