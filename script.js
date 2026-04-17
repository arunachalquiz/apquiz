// This is the "Brain" of your quiz app
let currentQuestionIndex = 0;
let filteredQuestions = [...myQuestions]; // Starts with all 100 questions

// 1. Function to filter by category (History, Science, etc.)
function filterQuestions(categoryName) {
    if (categoryName === 'All') {
        filteredQuestions = [...myQuestions];
    } else {
        filteredQuestions = myQuestions.filter(q => q.category === categoryName);
    }
    currentQuestionIndex = 0; // Always restart at question 1
    displayQuestion();
}

// 2. Function to show the question on the screen
function displayQuestion() {
    const q = filteredQuestions[currentQuestionIndex];
    
    // Update the question text
    const questionElement = document.getElementById('question-box');
    if (questionElement && q) {
        questionElement.innerText = q.q;
    }
    
    // This is where you would also update your answer buttons
    console.log("Current Category:", q.category);
}

// 3. Function for the "Next" button
function nextQuestion() {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        alert("End of this category!");
    }
}