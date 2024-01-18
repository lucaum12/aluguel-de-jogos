let jogosAlugados = [];
let jogosDevolvidos = [];

function alterarStatus(id) {
    let idGame = document.getElementById(`game-${id}`);
    let imagem = idGame.querySelector(".dashboard__item__img");
    let nomeDoJogo = idGame.querySelector(".dashboard__item__name");
    let botao = idGame.querySelector(".dashboard__item__button");

    if(botao.classList.contains("dashboard__item__button--return")){
        if(confirm(`Você realmente deseja devolver o jogo "${nomeDoJogo.textContent}"?`)){
        botao.classList.remove("dashboard__item__button--return");
        imagem.classList.remove("dashboard__item__img--rented");
        botao.textContent = "Alugar";
        jogosDevolvidos.push(nomeDoJogo);
        let mensagemDevolvidos = jogosDevolvidos.length > 1 ? "jogos devolvidos até o momento!" : "jogo devolvido até o momento!";
        console.log(`${jogosDevolvidos.length} ${mensagemDevolvidos}`);
        }
    } else {
        botao.classList.add("dashboard__item__button--return");
        imagem.classList.add("dashboard__item__img--rented");
        botao.textContent = "Devolver";
        jogosAlugados.push(nomeDoJogo);
        let mensagemAlugados = jogosAlugados.length > 1 ? "jogos alugados até o momento!" : "jogo alugado até o momento!";
        console.log(`${jogosAlugados.length} ${mensagemAlugados}`);
    }
}