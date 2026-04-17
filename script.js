let currentQuestionIndex = 0;
let filteredQuestions = [];

// This function runs automatically when the page finishes loading
window.onload = function() {
    if (typeof myQuestions !== 'undefined') {
        filteredQuestions = [...myQuestions];
        displayQuestion();
        console.log("Questions loaded successfully!");
    } else {
        console.error("questions.js was not found by the browser.");
        document.getElementById("question-text").innerText = "Error: questions.js not found.";
    }
};

function displayQuestion() {
    // Safety check: make sure we have questions
    if (filteredQuestions.length > 0) {
        const q = filteredQuestions[currentQuestionIndex];
        document.getElementById("question-text").innerText = q.q;
        
        // If you have an info box, you can update it too:
        // document.getElementById("info-text").innerText = q.info;
    }
}

function filterQuestions(categoryName) {
    if (categoryName === 'All') {
        filteredQuestions = [...myQuestions];
    } else {
        filteredQuestions = myQuestions.filter(q => q.category === categoryName);
    }
    currentQuestionIndex = 0;
    displayQuestion();
}

function nextQuestion() {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        alert("You've reached the end of this category!");
    }
}