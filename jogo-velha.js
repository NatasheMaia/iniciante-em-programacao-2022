const quadrados = document.querySelectorAll(".quadrado-jogo");
const X = "X";
const O = "O";

function nextPlayer() {
    player === "X" ? player = "O" : player = "X";
    marcarJogadorAtivo(player);
}

let player = "X";
marcarJogadorAtivo(player);

function selecionarArea(linePosition, columnPosition) {
    const getText = document.querySelector(`[data-linha='${linePosition}'][data-coluna='${columnPosition}']`).textContent;
    if (player === "X") {
        if (getText === "") {
            insertSymbol(X, linePosition, columnPosition);
            checkWinner();
            nextPlayer();
        }
    } else {
        if (getText === "") {
            insertSymbol(O, linePosition, columnPosition);
            checkWinner();
            nextPlayer();
        }
    }
}

function checkGameBoard() {
    for (let i in quadrados) {
        if (quadrados[i].textContent === '') {
            return false;
        }
    }
    return true;
}

function verificarQuadrados(quadrado1, quadrado2, quadrado3) {
    if (quadrado1.textContent === quadrado2.textContent && quadrado1.textContent === quadrado3.textContent && quadrado1.textContent !== "") {
        return true;
    }
    return false;
}

function checkWinner() {
    const quadrado = document.querySelectorAll(".quadrado-jogo");
    if (verificarQuadrados(quadrado[0], quadrado[1], quadrado[2]) | verificarQuadrados(quadrado[3], quadrado[4], quadrado[5]) ||
        verificarQuadrados(quadrado[6], quadrado[7], quadrado[8]) || verificarQuadrados(quadrado[0], quadrado[3], quadrado[6]) ||
        verificarQuadrados(quadrado[1], quadrado[4], quadrado[7]) || verificarQuadrados(quadrado[2], quadrado[5], quadrado[8]) ||
        verificarQuadrados(quadrado[0], quadrado[4], quadrado[8]) || verificarQuadrados(quadrado[2], quadrado[4], quadrado[6])) {

        quadrados.forEach((quadrado) => { quadrado.removeAttribute("onclick"); });

        showWinner(`Hooray player ${player} !!`);
    } else {
        checkGameBoard() ? showWinner("Oh no, it is a tie. Try again.") : '';
    }
}

function reiniciarJogo() {
    location.reload();
}
