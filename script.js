//

const questions = [
  {
    question: "Siapa Nama Pria Paling Kau Sayangi?",
    answers: [
      { text: "Jokowi", correct: false },
      { text: "Risky Ardianto", correct: true },
      { text: "Prabowo", correct: false },
      { text: "Mantan Mu", correct: false },
    ],
  },
  {
    question: "Dimana Kita Berkenalan Pertama Kali?",
    answers: [
      { text: "WhatsApp", correct: false },
      { text: "Facebook ", correct: false },
      { text: "Instagram", correct: false },
      { text: "Omi", correct: true },
    ],
  },
  {
    question: "which is the smallest continent in the world?",
    answers: [
      { text: "10 Juni 2021", correct: false },
      { text: "10 juni 2023", correct: true },
      { text: "10 Mei 2024", correct: false },
      { text: "10 Mei 2023", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answersButtons = document.getElementById("answer-buttons");
const nextBotton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function starQuis() {
  currentQuestionIndex = 0;
  score = 0;
  nextBotton.innerHTML = "Next";
  showQustion();
}

function showQustion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answersButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextBotton.style.display = "none";
  while (answersButtons.firstChild) {
    answersButtons.removeChild(answersButtons.firstChild);
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
  Array.from(answersButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBotton.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML = ` You Scored ${score} out of ${questions.length}!`;
  nextBotton.innerHTML = " Play Again";
  nextBotton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQustion();
  } else {
    showScore();
  }
}

nextBotton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    starQuis();
  }
});
starQuis();
