const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Mars", correct: true },
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: false },
    ],
  },
  {
    question: "What is H₂O commonly known as?",
    answers: [
      { text: "Salt", correct: false },
      { text: "Water", correct: true },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "Which animal is the largest in the world?",
    answers: [
      { text: "Elephant", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "How many legs does a spider have?",
    answers: [
      { text: "Six", correct: false },
      { text: "Eight", correct: true },
      { text: "Ten", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Leonardo da Vinci", correct: true },
      { text: "Pablo Picasso", correct: false },
      { text: "Vincent van Gogh", correct: false },
    ],
  },
  {
    question: "Which continent is Egypt located on?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Africa", correct: true },
      { text: "Europe", correct: false },
    ],
  },
  {
    question: "What is the main ingredient in bread?",
    answers: [
      { text: "Rice", correct: false },
      { text: "Flour", correct: true },
      { text: "Sugar", correct: false },
    ],
  },
  {
    question: "Which gas do plants absorb from the air?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Nitrogen", correct: false },
    ],
  },
  {
    question: "Which ocean is the largest?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "What does a thermometer measure?",
    answers: [
      { text: "Speed", correct: false },
      { text: "Temperature", correct: true },
      { text: "Pressure", correct: false },
    ],
  },
  {
    question: "Which season comes after summer?",
    answers: [
      { text: "Spring", correct: false },
      { text: "Autumn", correct: true },
      { text: "Winter", correct: false },
    ],
  },
  {
    question: "Which fruit is yellow and long?",
    answers: [
      { text: "Banana", correct: true },
      { text: "Apple", correct: false },
      { text: "Grapes", correct: false },
    ],
  },
  {
    question: "What color do you get when you mix red and white?",
    answers: [
      { text: "Pink", correct: true },
      { text: "Orange", correct: false },
      { text: "Purple", correct: false },
    ],
  },
  {
    question: "Which shape has three sides?",
    answers: [
      { text: "Circle", correct: false },
      { text: "Triangle", correct: true },
      { text: "Square", correct: false },
    ],
  },
  {
    question: "What is 5 + 7?",
    answers: [
      { text: "12", correct: true },
      { text: "11", correct: false },
      { text: "10", correct: false },
    ],
  },
  {
    question: "What is the opposite of 'cold'?",
    answers: [
      { text: "Hot", correct: true },
      { text: "Warm", correct: false },
      { text: "Chill", correct: false },
    ],
  },
  {
    question: "Which planet is closest to the Sun?",
    answers: [
      { text: "Mercury", correct: true },
      { text: "Venus", correct: false },
      { text: "Earth", correct: false },
    ],
  },
  {
    question: "What is the color of an emerald?",
    answers: [
      { text: "Blue", correct: false },
      { text: "Green", correct: true },
      { text: "Yellow", correct: false },
    ],
  },
  {
    question: "How many days are in a leap year?",
    answers: [
      { text: "365", correct: false },
      { text: "366", correct: true },
      { text: "364", correct: false },
    ],
  },
];

const questionElement = document.querySelector("#question");
const answerButtons = document.querySelector(".answer-buttons");
const nextBtn = document.querySelector("#next-btn");
const btn = document.querySelector(".btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You score ${score} out of ${questions.length}`;
  nextBtn.innerHTML = `Play Again`;
  nextBtn.style.display = "block";
}

function handleNextBtn() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});

startQuiz();
