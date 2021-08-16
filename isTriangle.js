const angles = document.querySelectorAll(".angle");
const calculate = document.querySelector("#check");
const output = document.querySelector("#result");

function calculateSumOfAngles(a,b,c){
    const sumOfAngles = a + b + c;
    return sumOfAngles;
}

function checkIfTriangle(){

    const sumValue = calculateSumOfAngles(Number(angles[0].value),Number(angles[1].value),Number(angles[2].value));
    console.log(sumValue);
    if (sumValue===180){
        output.innerText = "Yay, the angle values entered make a triangle 🥳";
    }
    else{
        output.innerText = "Oops, the angles entered don't form a triangle 😓";
    }
}

calculate.addEventListener('click',checkIfTriangle);