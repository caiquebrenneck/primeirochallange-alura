function removerFundoPensando() {
    var fundoPensando = document.querySelector("#mensagem-traduzido");
    fundoPensando.classList.remove("pensando"); 
    botaoLimpar.classList.remove("invisivel");
}

function removerFundoError() {
    var fundoError = document.querySelector("#mensagem-traduzido");
    fundoError.classList.remove("error");
}

function adicionarFundoError() {
    var fundoError = document.querySelector("#mensagem-traduzido");
    fundoError.classList.add("error");
}
