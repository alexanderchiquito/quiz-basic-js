const data = [
  {
    id: 1,
    question: "what's the capital of France?  ",
    answers: [
      { answer: "Roma", isCorrect: false },
      { answer: "Paris", isCorrect: true },
      { answer: "Toronto", isCorrect: false },
      { answer: "Caracas", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "In what year was America discovered by Christopher Columbus?",
    answers: [
      { answer: "1492 ", isCorrect: true },
      { answer: "1789", isCorrect: false },
      { answer: "1844", isCorrect: false },
      { answer: "1605", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "What is the longest river in the world?",
    answers: [
      { answer: "Nilo", isCorrect: true },
      { answer: "Amazonas", isCorrect: false },
      { answer: "Mississippi", isCorrect: false },
      { answer: "Yangtze", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "What is the chemical symbol for gold?",
    answers: [
      { answer: "Ag", isCorrect: false },
      { answer: "Hg", isCorrect: false },
      { answer: "Au ", isCorrect: true },
      { answer: "Fe", isCorrect: false },
    ],
  },
  {
    id: 5,
    question: "Who wrote the famous novel 'One Hundred Years of Solitude'",
    answers: [
      { answer: "Pablo Neruda", isCorrect: false },
      { answer: "Cristiano Ronaldo", isCorrect: false },
      { answer: "Mario Vargas Llosa", isCorrect: false },
      { answer: " Gabriel García Márquez", isCorrect: true },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScren = document.querySelector(".results");
const question = document.querySelector(".question");
const answerContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctAnswer = 0;
let wrongAnswer = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
  qIndex = 0;
  correctAnswer = 0;
  wrongAnswer = 0;
  total = 0;
  showQuestion(qIndex);
};

play.addEventListener("click", () => {
  resultScren.style.display = "none";
  gameScreen.style.display = "block";
  playAgain();
});

const showResult = () => {
  resultScren.style.display = "block";
  gameScreen.style.display = "none";

  resultScren.querySelector(
    ".correct"
  ).textContent = `Correct Answers: ${correctAnswer}`;

  resultScren.querySelector(
    ".wrong"
  ).textContent = `Wrong Answers: ${wrongAnswer}`;

  resultScren.querySelector(".score").textContent = `Score: ${
    (correctAnswer - wrongAnswer) * 10
  }`;
};

const showQuestion = (qNumber) => {
  if (qIndex === data.length) return showResult();
  question.textContent = data[qNumber].question;
  answerContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `
        <div class="answer">
            <input name="answer" type="radio" id=${index} value=${item.isCorrect}>
            <label for=${index}>${item.answer}</label>
        </div>

        `
    )
    .join("");

  selectAnswer();
};

const selectAnswer = () => {
  selectedAnswer = null;
  answerContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctAnswer++ : wrongAnswer++;
      qIndex++;
      showQuestion(qIndex);
    } else alert("Select an answer!!");
  });
};

showQuestion(qIndex);
submitAnswer();
