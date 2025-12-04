const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const choicesBox = document.querySelector('.choices');
const nextBtn = document.querySelector('.nextBtn');
const scoreCard = document.querySelector('.scoreCard');
const alert = document.querySelector('.alert');
const startBtn = document.querySelector('.startBtn');
const timer = document.querySelector('.timer');



const quiz = [{
        question: "Q. Which company developed JavaScript?",
        choices: ["Microsoft", "Netscape", "Google", "Oracle"],
        answer: "Netscape"
    },
    {
        question: "Q. Which keyword is used to declare a constant in JavaScript?",
        choices: ["var", "let", "const", "constant"],
        answer: "constant"
    },
    {
        question: "Q. Which of the following is NOT a JavaScript data type?",
        choices: ["Number", "String", "Boolean", "Character"],
        answer: "Character"
    },
    {
        question: "Q. Inside which HTML tag do we put JavaScript?",
        choices: ["<script>", "<js>", "<javascript>", "<code>"],
        answer: "<script>"
    },
    {
        question: "Q. Which method is used to convert JSON data into a JavaScript object?",
        choices: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"],
        answer: "JSON.parse()"
    },
    {
        question: "Q. Which operator is used to compare both value and type?",
        choices: ["==", "=", "===", "!=="],
        answer: "==="
    },
    {
        question: "Q. Which method is used to write a message in the browser console?",
        choices: ["console.write()", "console.print()", "console.log()", "log.console()"],
        answer: "console.log()"
    },
    {
        question: "Q. What will typeof null return?",
        choices: ["null", "undefined", "object", "number"],
        answer: "object"
    },
    {
        question: "Q. Which function is used to delay code execution?",
        choices: ["setInterval()", "setTimeout()", "delay()", "wait()"],
        answer: "setTimeout()"
    },
    {
        question: "Q. Which method adds an element at the end of an array?",
        choices: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()"
    }
];



let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;
let timeLeft = 15;
let timerID = null;


const showQuestions = () => {
    const questionDetails = quiz[currentQuestionIndex];
    questionBox.textContent = questionDetails.question;

    choicesBox.textContent = "";
    questionDetails.choices.forEach(choice => {
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent = choice;
        choiceDiv.classList.add('choice');
        choicesBox.appendChild(choiceDiv);

        choiceDiv.addEventListener('click', () => {
            document.querySelectorAll('.choice').forEach(c => c.classList.remove('selected'));
            choiceDiv.classList.add('selected');
        });
    });

    if (currentQuestionIndex < quiz.length) {
        startTimer();
    }
};



const checkAnswer = () => {
    const selectedChoice = document.querySelector('.choice.selected');
    if (selectedChoice.textContent === quiz[currentQuestionIndex].answer) {
        displayAlert("Correct Answer!");
        score++;
    } else {
        displayAlert(`Wrong Answer! ${quiz[currentQuestionIndex].answer} is the Correct Answer`);
    }

    timeLeft = 15;
    currentQuestionIndex++;

    if (currentQuestionIndex < quiz.length) {
        showQuestions();
    } else {
        stopTimer();
        showScore();
    }
};



const showScore = () => {
    questionBox.textContent = "";
    choicesBox.textContent = "";
    scoreCard.textContent = `You Scored ${score} out of ${quiz.length}!`;

    displayAlert("You have completed this quiz!");

    nextBtn.textContent = "Play Again";
    quizOver = true;
    timer.style.display = "none";
};


// ----------------------
// Alert Function
// ----------------------
const displayAlert = (msg) => {
    alert.style.display = "block";
    alert.textContent = msg;
    setTimeout(() => {
        alert.style.display = "none";
    }, 2000);
};



const startTimer = () => {
    clearInterval(timerID);
    timer.textContent = timeLeft;

    timerID = setInterval(() => {
        timeLeft--;
        timer.textContent = timeLeft;

        if (timeLeft === 0) {
            const confirmUser = confirm("Time Up!!! Do you want to play again?");
            if (confirmUser) {
                timeLeft = 15;
                startQuiz();
            } else {
                startBtn.style.display = "block";
                container.style.display = "none";
            }
        }
    }, 1000);
};

const stopTimer = () => clearInterval(timerID);



const shuffleQuestions = () => {
    for (let i = quiz.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
    }
    currentQuestionIndex = 0;
    showQuestions();
};


const startQuiz = () => {
    timeLeft = 15;
    timer.style.display = "flex";
    shuffleQuestions();
};



startBtn.addEventListener('click', () => {
    startBtn.style.display = "none";
    container.style.display = "block";
    startQuiz();
});

nextBtn.addEventListener('click', () => {
    const selectedChoice = document.querySelector('.choice.selected');

    if (!selectedChoice && nextBtn.textContent === "Next") {
        displayAlert("Select your answer");
        return;
    }

    if (quizOver) {
        nextBtn.textContent = "Next";
        scoreCard.textContent = "";
        currentQuestionIndex = 0;
        quizOver = false;
        score = 0;
        startQuiz();
    } else {
        checkAnswer();
    }
});