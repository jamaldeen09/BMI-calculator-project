let btnDecreElem = document.getElementById("btnDecre");
let btnIncreElem = document.getElementById("btnIncre");
let buttonvalueElem= document.getElementById("buttonvalue");
let weightDecreElem = document.getElementById("weightDecre");
let weightIncreElem = document.getElementById("weightIncre");
let weightValueElem = document.getElementById("weightValue");


// function handler
let age = 0;
//function to increment age
function addAge(){
    age ++ ;
    buttonvalueElem.innerHTML = Math.max(age , 0);
}
btnIncreElem.addEventListener("click", addAge);
// function to decrease age 
function decreaseAge(){
    age --;
    buttonvalueElem.innerHTML =Math.max(age,0);
}
btnDecreElem.addEventListener("click",decreaseAge);

// funciton for weight section 
// function to add weight 
let weight = 0;
function addWeight(){
    weight ++;
    weightValueElem.innerHTML= weight;
}
weightIncreElem.addEventListener("click", addWeight);

// function to reduce weight 
function decreaseWeight(){
    weight--;
    weightValueElem.innerHTML= weight;
}
weightDecreElem.addEventListener("click", decreaseWeight);

let page1Elem = document.getElementById("main");
let page2Elem = document.getElementById("result");
let recalElem = document.getElementById("recal");
let calElem = document.getElementById("calc");

function recalculate(){
    page1Elem.style.display = "block";
    page2Elem.style.display ="none";
}
recalElem.addEventListener("click", recalculate)


function calculate(){
    page1Elem.style.display = "none";
    page2Elem.style.display ="block";
}
calElem.addEventListener("click", calculate)