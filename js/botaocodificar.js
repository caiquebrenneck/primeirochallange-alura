var botaoCodificar = document.querySelector("#codificar");
botaoCodificar.onclick = function () {
    removerFundoError();
    var letras = pegarTexto();
    for(var i = 0; i < letras.length; i++)
    {
        if(letras[i] == "a")    letras.splice(i, 1, "ai");
        if(letras[i] == "e")    letras.splice(i, 1, "enter");
        if(letras[i] == "i")    letras.splice(i, 1, "imes");
        if(letras[i] == "o")    letras.splice(i, 1, "ober");
        if(letras[i] == "u")    letras.splice(i, 1, "ufat");
    }
    var testando = verificandoTexto(letras);
    if(testando) {
        document.getElementById("mensagem-traduzido").value = letras.join('');
    } else {
        document.getElementById("mensagem-traduzido").value = "";
        var invalido = document.querySelector("#mensagem-do-usuario");
        invalido.value = "ATENÇÃO... as regras, proibido letra maiúscula ou com acento!"
        invalido.classList.remove("valido");
        invalido.classList.add("invalido");
        adicionarFundoError();
        document.querySelector("#mensagem-traduzido").classList.remove("valido");
        document.querySelector("#mensagem-traduzido").classList.add("invalido");
    }
};