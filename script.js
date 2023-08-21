const numeroSorteado = Math.floor(Math.random() * 20) + 1;
let numeroDeTentativas = 0;

function checarTentativa() {
    const jogador = parseInt(document.getElementById("tentativaJogador").value);
    const messageElement = document.getElementById("mensagem");

    numeroDeTentativas++;

    if (jogador === numeroSorteado) {
        messageElement.textContent = `Parabéns! Você acertou em ${numeroDeTentativas} tentativas.`;
        messageElement.style.color = "green";
        desabilitarTentativaEBotao(); 
    } else if (jogador < numeroSorteado) {
        messageElement.textContent = "O número é maior. Não desanime e tente novamente.";
        messageElement.style.color = "red";
    } else {
        messageElement.textContent = "O número é menor. Não desanime e tente novamente.";
        messageElement.style.color = "red";
    }

    document.getElementById("tentativaJogador").value = "";
}

function desabilitarTentativaEBotao() {
    document.getElementById("tentativaJogador").disabled = true;
    document.getElementById("adivinhar").disabled = true; 
}