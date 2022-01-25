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
    var invalido = document.querySelector("#mensagem-do-usuario");
    invalido.setAttribute("disabled", "disabled");
    invalido.value = "ATENÇÃO... às regras, apenas letra minúscula e sem acento!"
    invalido.classList.remove("valido");
    invalido.classList.add("invalido");
}
