console.log("script.js loaded");

// 1. Emprty array to store user data
let userAnswers = {};
let questionBlocks = document.querySelectorAll(".question-block");

// Selecting all question blocks (4), looping each question block, sleecting all answer buttons, then getting all data using
// the dataset attribute
questionBlocks.forEach(function(block) {
    let answerButtons = block.querySelectorAll(".answer-btn");
    answerButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            answerButtons.forEach(function(btn) {
                btn.classList.remove("selected");
            });
            button.classList.add("selected");
            let questionID = button.dataset.questionid;
            let answer = button.dataset.answer;
            userAnswers[questionID] = answer;
            console.log(userAnswers);
        });
    });
});

// This function activates when the user clcks the results button at the bottom of the page
function displayResults() {
    let totalPoints = 0;
    for (let questionID in userAnswers) {
        totalPoints = totalPoints + parseInt(userAnswers[questionID]);
    }
    console.log("Total Points: " + totalPoints);
    let result = "";

    if (totalPoints >= 4 && totalPoints <= 6) {
        result = "You are Hip Hip!"
    } else if (totalPoints >= 7 && totalPoints <= 10) {
        result = "You are Indie/Alt Rock!"
    } else if (totalPoints >= 11 && totalPoints <= 13) {
        result = "You are Classical Music!" 
    } else if (totalPoints >= 14 && totalPoints <= 16) {
        result = "You are Pop!"
    } else {
        result = "Select all an answer for all four listed questions!";
    }

    // Display results
    let resultContainer = document.getElementById("result-container");
    resultContainer.textContent = result;

}

let resultsButton = document.getElementById("results-btn");

resultsButton.addEventListener("click", function() {
    displayResults();
});


 

 