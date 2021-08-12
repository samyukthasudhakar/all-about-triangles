console.log("are we in ?")

const sides = document.querySelectorAll(".side");
const calculate = document.querySelector("#find-Area");
const result = document.querySelector("#area");

function calculateArea(){
    console.log("Huston, we have connection");
    const area = (Number(sides[0].value) * Number(sides[1].value))/2;
    console.log("The area of the triangle is " + area + " sq units.")
    result.innerText = "The area of the triangle is " + area + " sq units.";
}

calculate.addEventListener("click",calculateArea);
