let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const massage = document.querySelector("#msg");
const user_Score = document.querySelector("#user-score");
const computer_score = document.querySelector("#computer-score");

const genarateComputerChoice = () => {
  const option = ["rock", "paper", "scissor"];
  let randomIdx = Math.floor(Math.random() * 3);
  return option[randomIdx];
};

const showTie = () => {
  massage.innerText = `It's tie. Try again`;
};

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    userScore += 1;
    user_Score.innerText = userScore;
    massage.innerText = `You Win. Your ${userChoice} beats ${computerChoice}`;
  } else {
    computerScore += 1;
    computer_score.innerText = computerScore;
    massage.innerText = `You lost. ${computerChoice} beats your ${userChoice}`;
  }
};

const playGame = (userChoice) => {
  const computerChoice = genarateComputerChoice();
  if (userChoice === computerChoice) {
    showTie();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = computerChoice === "scissor" ? false : true;
    } else {
      userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, computerChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
