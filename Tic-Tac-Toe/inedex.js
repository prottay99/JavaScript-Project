let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".massage");
let showMessage = document.querySelector(".show__message");
let startGameBtn = document.querySelector("#start-game");
let resetGameBtn = document.querySelector("#reset-game");

let trunO = true; // playerO , playerX

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  trunO = true;
  enableBoxes();
  msg.classList.add("hide");
};

const startGame = () => {
  resetGame();
  resetGameBtn.disabled = false;
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (trunO) {
      box.innerText = "O";
      box.style.color = "#b60505";
      trunO = false;
    } else {
      box.innerText = "X";
      box.style.color = "green";
      trunO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  showMessage.innerText = `Congratulation. Player ${winner} is winner`;
  msg.classList.remove("hide");
  disabledBoxes();
  resetGameBtn.disabled = true;
};

const showTieMassage = () => {
  let allFilled = Array.from(boxes).every((box) => box.innerText !== "");
  if (allFilled) {
    showMessage.innerText = `Match is Tied!`;
    msg.classList.remove("hide");
    resetGameBtn.disabled = true;
  }
};

const checkWinner = () => {
  let winnerFound = false;

  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if ((pos1Val !== "", pos2Val !== "", pos3Val !== "")) {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        winnerFound = true;
        break;
      } else {
        showTieMassage(); //if no player win then show
      }
    }
  }
};

resetGameBtn.addEventListener("click", resetGame);
startGameBtn.addEventListener("click", startGame);
