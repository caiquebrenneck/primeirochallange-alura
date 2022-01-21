function pegarTexto() {
    var texto = document.querySelector("#mensagem-do-usuario").value;
    var letras = [];
    for(var i = 0; i < texto.length; i++)   letras.push(texto[i]);
    return letras;
}

function verificandoTexto(letras) {
    var testando = true;
    for(var i = 0; i < letras.length; i++)
    {
        var testando = true;
        var elemento = letras[i];
        var codigo = elemento.charCodeAt(0);
        if(codigo < 97 && codigo != 32 || codigo > 122) {
            testando = false;
            break;          
        }
    }
    removerFundoPensando();
    return testando; 
}

