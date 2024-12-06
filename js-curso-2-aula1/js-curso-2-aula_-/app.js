let listaDeNumeros = [];
let numeroLimite = 10;
let idadeGalinha = numeroAleatorio();
let tentativas = 1;

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo de adivinhação da idade da galinha'

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Qual a idade da galinha?'
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',)
}


function exibirMensagemInicial() { 
    exibirTextoNaTela('h1', 'Jogo de adivinhação da idade da galinha'); 
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial()


function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == idadeGalinha){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você descobriu a idade da galinha com ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > idadeGalinha) {
            exibirTextoNaTela('p', 'a galinha é mais jovem!');
        } else {
            exibirTextoNaTela('p', 'a galinha é mais velha!');
        }
    }
    tentativas++;
    limparCampo();

    }

    limparCampo();

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeElementos = listaDeNumeros.length;

    if (quantidadeElementos == numeroLimite) {
        listaDeNumeros = [];
    }
    if (listaDeNumeros.includes(numeroEscolhido)) {
        return numeroAleatorio();
    } else {
        listaDeNumeros.push(numeroEscolhido)
        return numeroEscolhido
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

//Código omitido

function reiniciarJogo() {
    console.log("reiniciando");
    idadeGalinha = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}