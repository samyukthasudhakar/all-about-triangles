const quizForm = document.querySelector("#quizForm");
const userAnswers = new FormData(quizForm);
const check = document.querySelector("#check");

function checkAnswers(){
    console.log("Huston, we have connection!");
    for(var key of userAnswers.entries()){
        console.log(key[0]);
    }
}

check.addEventListener('click',checkAnswers);
