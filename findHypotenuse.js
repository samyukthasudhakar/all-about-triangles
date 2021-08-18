const sides = document.querySelectorAll(".side");
const calculate = document.querySelector("#find");
const result = document.querySelector("#result");

function sumOfSquares(a,b){
    const sumValue = a*a + b*b;
    return sumValue;
}

function findHypotenuse(){
    const sumOfTwoSides = sumOfSquares(Number(sides[0].value),Number(sides[1].value));
    const hypotenuse = Math.sqrt(sumOfTwoSides).toFixed(2);
    result.innerText = "The lenght of hypotenuse is " + hypotenuse + " units.";
}


calculate.addEventListener("click",findHypotenuse);