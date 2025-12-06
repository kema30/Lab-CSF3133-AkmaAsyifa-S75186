// QUIZ QUESTIONS ARRAY

// Each question has:
// - a question text
// - multiple choice options
// - index of the correct answer
const questions = [
    {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks Markup List"],
        answer: 0
    },

    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C++", "JavaScript"],
        answer: 2
    },

    {
        question: "CSS is used for:",
        options: ["Styling webpages", "Adding logic", "Storing data"],
        answer: 0
    },

    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "<!-- -->", "#"],
        answer: 0
    },

    {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Manager", "Digital Ordinance Model"],
        answer: 0
    }
];

// Variables to manage quiz
let shuffledQuestions = [];   // Questions after shuffling
let currentIndex = 0;         // Which question user is on
let score = 0;                // Total correct answers
let timer;                    // Stores the countdown timer
let timeLeft = 10;            // Seconds per question


// Shuffle Qusetions Randomly

function shuffleQuestions() {
    // Copy original array
    shuffledQuestions = [...questions];

    // Fisher–Yates shuffle algorithm
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        // Swap values
        [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
    }
}


// Start Timer for each question

function startTimer() {
    timeLeft = 10; // Reset timer each question
    document.getElementById("time").textContent = timeLeft;

    // Decrease timer every 1 second
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;

        // If timer reaches 0 → automatically mark incorrect
        if (timeLeft <= 0) {
            clearInterval(timer);
            checkAnswer(-1); // -1 means no answer selected
        }
    }, 1000);
}


// Display current questions

function displayQuestion() {

    const q = shuffledQuestions[currentIndex]; // Current question object

    // Show question text
    document.getElementById("question-text").textContent = q.question;

    // Clear previous options
    document.getElementById("options").innerHTML = "";

    // Create a button for each option
    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;

        // When clicked, check answer
        btn.onclick = () => checkAnswer(index);

        // Add button to page
        document.getElementById("options").appendChild(btn);
    });

    // Reset feedback and hide "Next" button
    document.getElementById("feedback").textContent = "";
    document.getElementById("next-btn").style.display = "none";

    // Start the timer
    startTimer();
}


// Check if answer is correct

function checkAnswer(selectedIndex) {
    clearInterval(timer); // Stop timer when answer selected

    const correctAnswer = shuffledQuestions[currentIndex].answer;

    // Compare selected option with correct option
    if (selectedIndex === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct!";
        document.getElementById("feedback").style.color = "green";
        score++; // Add 1 point
    } 
    else {
        document.getElementById("feedback").textContent = "Incorrect!";
        document.getElementById("feedback").style.color = "red";
    }

    // Show "Next Question" button
    document.getElementById("next-btn").style.display = "inline-block";
}


// Go next question

function nextQuestion() {
    currentIndex++; // Move to next question index

    // If we reached the end of the quiz
    if (currentIndex >= shuffledQuestions.length) {
        endQuiz();
    } 
    else {
        displayQuestion(); // Load next question
    }
}


// Finish quiz and show score

function endQuiz() {
    // Hide question area
    document.getElementById("question-container").style.display = "none";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("feedback").textContent = "";

    // Show final score
    document.getElementById("score-section").style.display = "block";
    document.getElementById("score").textContent =
        `${score} / ${shuffledQuestions.length}`;
}


// Start the quiz

function startQuiz() {
    score = 0;        // Reset score
    currentIndex = 0; // Reset question index

    shuffleQuestions(); // Randomize question order

    // Show question section again (in case of restart)
    document.getElementById("question-container").style.display = "block";
    document.getElementById("score-section").style.display = "none";

    displayQuestion(); // Load first question
}

// Start quiz automatically when page loads
startQuiz();
