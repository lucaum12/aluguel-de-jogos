let jogosAlugados = [];
let jogosDevolvidos = [];

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let nomeDoJogo = gameClicado.querySelector(".dashboard__item__name").textContent;
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");
    if(confirm(botao.classList.contains("dashboard__item__button--return"))) {
        botao.classList.remove("dashboard__item__button--return");
        imagem.classList.remove("dashboard__item__img--rented");
        botao.textContent = "Alugar";
        jogosDevolvidos.push(nomeDoJogo);
        jogosAlugados.pop(nomeDoJogo);
        console.log(`Jogos devolvidos no momento: ${jogosDevolvidos.length}`);
    } else {
        botao.classList.add("dashboard__item__button--return");
        imagem.classList.add("dashboard__item__img--rented");
        botao.textContent = "Devolver";
        jogosAlugados.push(nomeDoJogo);
        jogosDevolvidos.pop(nomeDoJogo);
        console.log(`Jogos alugados no momento: ${jogosAlugados.length}`);
    }
}