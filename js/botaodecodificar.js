var botaoDecodificar = document.querySelector("#decodificar");
botaoDecodificar.onclick = function () {
    removerFundoError();

    var letras = pegarTexto();
    var testando = verificandoTexto(letras);

    if (testando) {
        var escritoCorreto = true;
        for(var i = 0; i < letras.length; i++) {
            if(letras.slice(i, i + 1).join('') == "a"){
                if(letras.slice(i, i + 2).join('') == "ai") {
                    letras.splice(i + 1, 1);
                } else {
                    escritoCorreto = false;
                    break;
                }
            } else {
                if(letras.slice(i, i + 1).join('') == "e") {
                    if(letras.slice(i, i + 5).join('') == "enter") {
                        letras.splice(i + 1, 4);
                    } else {
                        escritoCorreto = false;
                        break;
                    }
                } else {
                    if(letras.slice(i, i + 1).join('') == "i") {
                        if(letras.slice(i, i + 4).join('') == "imes") {
                            letras.splice(i + 1, 3);
                        } else {
                            escritoCorreto = false;
                            break;
                        }
                    } else {
                        if(letras.slice(i, i + 1).join('') == "o") {
                            if(letras.slice(i, i + 4).join('') == "ober") {
                                letras.splice(i + 1, 3);
                            } else {
                                escritoCorreto = false;
                                break;
                            }
                        } else {
                            if(letras.slice(i, i + 1).join('') == "u") {
                                if(letras.slice(i, i + 4).join('') == "ufat") {
                                    letras.splice(i + 1, 3);
                                } else { 
                                    escritoCorreto = false;
                                    break;
                                }
                            } else {
                                console.log("não tem vogal");
                            }
                        }
                    }
                }
            }
        }
        if(escritoCorreto) {
            document.getElementById("mensagem-traduzido").value = letras.join('');
        } else {
            document.getElementById("mensagem-traduzido").value = "";
            adicionarFundoError();
        }
    }
}