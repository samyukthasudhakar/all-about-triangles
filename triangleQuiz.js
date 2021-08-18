const quizForm = document.querySelector(".quiz-Form");
const check = document.querySelector("#check");
const result = document.querySelector("#result");

var correctAnswers = ["Right","180°","Equilateral","90°"];

function checkAnswers(){
    var count=0;
    var index=0;
    const userAnswers = new FormData(quizForm);
    for(let entry of userAnswers.values()){
        if(entry===correctAnswers[index]){
            count = count + 1;
        }
        index = index + 1;
    }
    
    if(index!=4){
        result.innerText="Answer all Questions 👆🏽";
    }
    else{
        result.innerText="Score : "+count+"/4";
    }
    
}

check.addEventListener('click',checkAnswers);
