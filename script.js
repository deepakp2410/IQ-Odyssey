let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timerInterval; // Ensure timerInterval is declared globally

const timerElement = document.getElementById('time');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');

// Define your questions
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "HTML", "C++", "Java"],
        answer: "HTML"
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"],
        answer: "William Shakespeare"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Gold", "Iron", "Osmium"],
        answer: "Oxygen"
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "8", "10", "12"],
        answer: "8"
    },
    {
        question: "Which year did the Titanic sink?",
        options: ["1912", "1905", "1898", "1920"],
        answer: "1912"
    },
    {
        question: "Who is the CEO of Tesla?",
        options: ["Elon Musk", "Jeff Bezos", "Bill Gates", "Steve Jobs"],
        answer: "Elon Musk"
    }
];

// Load the first question
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
    
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
        feedbackElement.textContent = "Correct!";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "Incorrect!";
        feedbackElement.style.color = "red";
    }
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.textContent = "Quiz Over!";
    optionsElement.innerHTML = '';
    scoreElement.textContent = `Your Score: ${score}/${questions.length}`;
    clearInterval(timerInterval);
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

// Handle the Submit button (if the user wants to end the quiz early)
document.getElementById('submit-btn').addEventListener('click', () => {
    endQuiz();
});

// Load questions and start timer when the page loads
window.onload = () => {
    loadQuestion();
    startTimer();
};
