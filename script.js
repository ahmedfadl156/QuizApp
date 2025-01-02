const configContainer = document.querySelector(".config-container");
const quizContainer = document.querySelector(".quiz-container");
const answerOptions = document.querySelector(".answer-options");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const questionStatus = document.querySelector(".question-status");
const timerDisplay = document.querySelector(".time-duration");
const resultConatiner = document.querySelector(".result-container");
let quizCategory = "entertainment";
let currentQuestion = null;
let numberOfQuestions = 5;
const questionsIndexHistory = [];
const QUIZ_TIME_LIMIT = 15;
let currentTime = QUIZ_TIME_LIMIT;
let timer = null;
let correctAnswersCount = 0;

const resetTimer = () => {
    clearInterval(timer);
    currentTime = QUIZ_TIME_LIMIT;
    timerDisplay.textContent = `${currentTime}s`;
}

const startTimer = () => {
    timer = setInterval(() => {
        currentTime--;

        timerDisplay.textContent = `${currentTime}s`;
        if(currentTime <= 0){
            clearInterval(timer);
            highlightCorrectAnswer();
            nextQuestionBtn.style.visibility = "visible";
            quizContainer.querySelector(".quiz-timer").style.backgroundColor = "red";
            answerOptions.querySelectorAll(".answer-option").forEach(opt => {
                opt.style.pointerEvents = "none";
            });
            
        }
    }, 1000);
}

const showResultContainer = () => {
    quizContainer.style.display = "none";
    resultConatiner.style.display = "block";

    const resultText = `You Answered <b>${correctAnswersCount }</b> Out Of <b>${numberOfQuestions}</b> Questions Correctly. Great Effort!`
    document.querySelector(".result-text").innerHTML = resultText;
}

const getRandomQuestion = () => {
    const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions || [];

    if (questionsIndexHistory.length >= Math.min(categoryQuestions.length, numberOfQuestions)) {
        return showResultContainer();
    }

    const availableQuestions = categoryQuestions.filter((_, index) => !questionsIndexHistory.includes(index));
    const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];

    return {
        question: randomQuestion,
        index: categoryQuestions.indexOf(randomQuestion), 
    };
};


const highlightCorrectAnswer = () => {
    const correctOption = answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
    
    if (correctOption) {
        correctOption.classList.add("correct");
        const iconHTML = `<span class="material-symbols-rounded">check_circle</span>`;
        correctOption.insertAdjacentHTML("beforeend", iconHTML);
    }
}


const handleAnswer = (option, answerIndex) => {
    clearInterval(timer);
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    answerOptions.querySelectorAll(".answer-option").forEach(opt => {
        opt.style.pointerEvents = "none";
    });
    
    nextQuestionBtn.style.visibility = "visible";

    option.classList.add(isCorrect ? "correct" : "incorrect");

    const correctOption = answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
    
    const iconHTML = `<span class="material-symbols-rounded">${isCorrect ? "check_circle" : "cancel"}</span>`;
    
    if (!isCorrect) {
        correctOption.classList.add("correct");
        const correctIconHTML = `<span class="material-symbols-rounded">check_circle</span>`;
        correctOption.insertAdjacentHTML("beforeend", correctIconHTML);
    }
    else{
        correctAnswersCount++;
    }

    option.insertAdjacentHTML("beforeend", iconHTML);
}
nextQuestionBtn.addEventListener('click', () => {
    answerSelected = false;
    renderQuestion();
});

const renderQuestion = () => {
    const result = getRandomQuestion();
    if (!result) return;

    const { question, index } = result;
    currentQuestion = question;

    questionsIndexHistory.push(index);

    resetTimer();
    startTimer();
    answerOptions.innerHTML = "";
    nextQuestionBtn.style.visibility = "hidden";
    quizContainer.querySelector(".quiz-timer").style.backgroundColor = "#32313C";

    document.querySelector('.question-text').textContent = currentQuestion.question;
    questionStatus.innerHTML = `<b>${questionsIndexHistory.length}</b> out of <b>${numberOfQuestions}</b> questions`;
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.classList.add("answer-option");
        li.textContent = option;
        answerOptions.appendChild(li);
        li.addEventListener("click", () => handleAnswer(li, index));
    });
};


document.querySelectorAll(".category-option , .question-option").forEach(option => {
    option.addEventListener("click", () => {
        option.parentNode.querySelector(".active").classList.remove("active");
        option.classList.add("active");
    });
});

const startQuiz = () => {
    questionsIndexHistory.length = 0; 
    correctAnswersCount = 0; 

    configContainer.style.display = "none";
    quizContainer.style.display = "block";

    quizCategory = configContainer.querySelector(".category-option.active").textContent;
    numberOfQuestions = parseInt(configContainer.querySelector(".question-option.active").textContent);

    renderQuestion();
};


const resetQuiz = () => {
    resetTimer();
    questionsIndexHistory.length = 0;
    correctAnswersCount = 0;
    configContainer.style.display = "block";
    resultConatiner.style.display = "none";
}

renderQuestion();

document.querySelector(".try-again-btn").addEventListener("click" , resetQuiz); 
document.querySelector(".start-quiz-btn").addEventListener("click" , startQuiz); 