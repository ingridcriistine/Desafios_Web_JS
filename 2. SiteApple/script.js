let imagem = document.getElementById("imagem-visualizacao");
let imagem0 = document.getElementById("0-imagem-miniatura");
let imagem1 = document.getElementById("1-imagem-miniatura");
let imagem2 = document.getElementById("2-imagem-miniatura");

let tituloCor = document.getElementById("nome-cor-selecionada");
let corAtual = "azul-inverno";
let caminhoCor = "./imagens/opcoes-cores/" + corAtual + ".jpeg";
let tamAtual = "45mm"
let tituloProduto = document.getElementById("titulo-produto");
let posAtual = 1;

tituloCor.innerHTML = "Cor - Azul-inverno";
tituloProduto.innerHTML = "Pulseira loop esportiva azul-inverno para caixa de" + tamAtual;

imagem.setAttribute("src", "./imagens/opcoes-cores/imagens-" + corAtual + "/imagem-1.jpeg");
imagem0.setAttribute("src", "./imagens/opcoes-cores/imagens-" + corAtual + "/imagem-0.jpeg");
imagem1.setAttribute("src", "./imagens/opcoes-cores/imagens-" + corAtual + "/imagem-1.jpeg");
imagem2.setAttribute("src", "./imagens/opcoes-cores/imagens-" + corAtual + "/imagem-2.jpeg");

function trocarTamanho() {
    let tam0 = document.getElementById("0-tamanho");
    let tam1 = document.getElementById("1-tamanho");
    tamAtual = "45mm"

    if(tam0.checked) {
        tamAtual = "41mm";
    }

    else {
        tamAtual = "45mm";
    }
    tituloProduto.innerHTML = "Pulseira loop esportiva " + corAtual + " para caixa de" + tamAtual;
}

function trocaCor() {
    
    let cor0 = document.getElementById("0-cor");
    let cor1 = document.getElementById("1-cor");
    let cor2 = document.getElementById("2-cor");
    let cor3 = document.getElementById("3-cor");
    let cor4 = document.getElementById("4-cor");

    if(cor0.checked) {
        corAtual = "verde-cipreste";
        tituloCor.innerHTML = "Cor - Verde-cipreste";
        tituloProduto.innerHTML = "Pulseira loop esportiva " + corAtual + " para caixa de " + tamAtual;
    }

    else if(cor1.checked) {
        corAtual = "azul-inverno";
        tituloCor.innerHTML = "Cor - Azul-inverno";
        tituloProduto.innerHTML = "Pulseira loop esportiva " + corAtual + " para caixa de " + tamAtual;
    }

    else if(cor2.checked) {
        corAtual = "meia-noite";
        tituloCor.innerHTML = "Cor - Meia-noite";
        tituloProduto.innerHTML = "Pulseira loop esportiva " + corAtual + " para caixa de " + tamAtual;
    }

    else if(cor3.checked) {
        corAtual = "estelar";
        tituloCor.innerHTML = "Cor - Estelar";
        tituloProduto.innerHTML = "Pulseira loop esportiva " + corAtual + " para caixa de " + tamAtual;
    }

    else {
        corAtual = "rosa-claro";
        tituloCor.innerHTML = "Cor - Rosa-claro";
        tituloProduto.innerHTML = "Pulseira loop esportiva " + corAtual + " para caixa de " + tamAtual;
    }

    imagem.setAttribute("src", "./imagens/opcoes-cores/imagens-" + corAtual + "/imagem-" + posAtual + ".jpeg");
    imagem0.setAttribute("src", "./imagens/opcoes-cores/imagens-" + corAtual + "/imagem-0.jpeg");
    imagem1.setAttribute("src", "./imagens/opcoes-cores/imagens-" + corAtual + "/imagem-1.jpeg");
    imagem2.setAttribute("src", "./imagens/opcoes-cores/imagens-" + corAtual + "/imagem-2.jpeg");
}

function trocarImagem() {

    let btnImg0 = document.getElementById("0-imagem");
    let btnImg1 = document.getElementById("1-imagem");
    let btnImg2 = document.getElementById("2-imagem");

    if(btnImg0.checked) {
        posAtual = 0;
    }
    
    else if(btnImg1.checked) {
        posAtual = 1;
    }
    
    else {
        posAtual = 2;
    } 

    imagem.setAttribute("src", "./imagens/opcoes-cores/imagens-" + corAtual + "/imagem-" + posAtual + ".jpeg");
}
