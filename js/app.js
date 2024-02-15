let jogosAlugados = [];
let jogosDevolvidos = [];

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let nomeDoJogo = gameClicado.querySelector(".dashboard__item__name").textContent;
    let imagemDoJogo = gameClicado.querySelector(".dashboard__item__img");
    let botaoDoJogo = gameClicado.querySelector(".dashboard__item__button");

    if(imagemDoJogo.classList.contains("dashboard__item__img--rented") && botaoDoJogo.classList.contains("dashboard__item__button--return")) {
        imagemDoJogo.classList.remove("dashboard__item__img--rented");
        botaoDoJogo.classList.remove("dashboard__item__button--return");
        botaoDoJogo.textContent = "Alugar";
        jogosDevolvidos.push(nomeDoJogo);
        jogosAlugados.pop(nomeDoJogo);
        console.log(`Jogos devolvidos no momento: ${jogosDevolvidos.length}`);
    }
    else {
        imagemDoJogo.classList.add("dashboard__item__img--rented");
        botaoDoJogo.classList.add("dashboard__item__button--return");
        botaoDoJogo.textContent = "Devolver";
        jogosDevolvidos.pop(nomeDoJogo);
        jogosAlugados.push(nomeDoJogo);
        console.log(`Jogos alugados no momento: ${jogosAlugados.length}`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    exibirTotalJogosAlugadosEDevolvidos();
})

function exibirTotalJogosAlugadosEDevolvidos() {
    let totalJogosAlugados = document.querySelectorAll(".dashboard__item__button--return").length;
    console.log(`Começando com um total de jogos alugados: ${totalJogosAlugados}`);
}