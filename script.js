let playerSymbol = "X";
let gameEnded = false;
let countSteps = 0;
document.getElementById("player").innerText = `${playerSymbol}`;
document.getElementById("player").classList.add(playerSymbol.toLowerCase());
// объявляем выигрышные позиции
let winPos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

// запускаем цикл игры
for (let i = 1; i <= 9; i++) {
  document.getElementById(i.toString()).addEventListener("click", function () {
    countSteps++;
    if (this.innerHTML === "" && !gameEnded) {
      this.innerHTML = playerSymbol; // ставим символ на поле
      this.classList.add(playerSymbol.toLowerCase()); // применяем стиль к ячейке
      document
        .getElementById("player")
        .classList.remove(playerSymbol.toLowerCase());
      checkWin();

      if (!gameEnded && countSteps === 9) {
        setTimeout(function () {
          // alert("НИЧЬЯ");
          document
            .getElementById("player")
            .classList.remove(playerSymbol.toLowerCase());
          document.getElementById("player").innerText = "ДРУЖБА";
          document.getElementById("header").innerText = "Победитель";
          document.getElementById("player").classList.add("green");
        }, 100);
      } else if (!gameEnded) {
        if (playerSymbol === "X") playerSymbol = "O";
        else playerSymbol = "X";
      }
      document.getElementById("player").innerText = `${playerSymbol}`;
      document
        .getElementById("player")
        .classList.add(playerSymbol.toLowerCase());
    }
  });
}

function checkWin() {
  for (let i = 0; i < winPos.length; i++) {
    // проверяем выигрышные комбинации
    if (
      document.getElementById(winPos[i][0]).innerHTML === playerSymbol &&
      document.getElementById(winPos[i][1]).innerHTML === playerSymbol &&
      document.getElementById(winPos[i][2]).innerHTML === playerSymbol
    ) {
      // выделяем выигрышные ячейки в случае, если есть победитель
      document.getElementById(winPos[i][0]).classList.add("win");
      document.getElementById(winPos[i][1]).classList.add("win");
      document.getElementById(winPos[i][2]).classList.add("win");
      gameEnded = true;

      setTimeout(function () {
        document.getElementById("player").innerText = `${playerSymbol}`;
        document.getElementById("header").innerText = "Победитель";
        document
          .getElementById("player")
          .classList.add(playerSymbol.toLowerCase());
      }, 100);
    }
  }
}

// создаем кнопку перезагрузки поля и игры
document.getElementById("reset").addEventListener("click", function () {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).innerHTML = "";
    document.getElementById(i.toString()).classList.remove("x");
    document.getElementById(i.toString()).classList.remove("o");
    document.getElementById(i.toString()).classList.remove("win");
    document
      .getElementById("player")
      .classList.remove(playerSymbol.toLowerCase());
    document.getElementById("player").classList.remove("green");
    gameEnded = false;
    countSteps = 0;
    playerSymbol = "X";
    gameEnded = false;
    document.getElementById("header").innerText = "Сейчас ходит:";
    document.getElementById("player").innerText = `${playerSymbol}`;
    document.getElementById("player").classList.add(playerSymbol.toLowerCase());
  }
});
