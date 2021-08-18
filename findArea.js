console.log("are we in ?")

const sides = document.querySelectorAll(".side");
const calculate = document.querySelector("#find-Area");
const result = document.querySelector("#area");

function calculateArea(){

    var a = Number(sides[0].value);
    var b = Number(sides[1].value);
    var c = Number(sides[2].value);
    var s = (a+b+c)/2

    var value = s*(s-a)*(s-b)*(s-c);
    var area = Math.sqrt(value);

    result.innerText = "The area of the triangle is " + area + " sq units.";
}

calculate.addEventListener("click",calculateArea);
