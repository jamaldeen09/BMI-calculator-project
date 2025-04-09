
// Male button
let maleBtnElem = document.getElementById("btn");
let fontIconElem = document.getElementById("icon");
let h5Elem = document.getElementById("h5vie");
// End

// Female button
let FemaleBtnElem = document.getElementById("btn2");
let fontIconElem2 = document.getElementById("icon2");
let h5Elem2 = document.getElementById("h5vie2");
// End

// range
const range = document.getElementById('value');
const label = document.getElementById("lbl");

// end

// weight

let weightvalElem = document.getElementById("val");
let plusSignElem = document.getElementById("plus");
let minusSignElem = document.getElementById("minus");

// End

// age
let agevalElem = document.getElementById("val2");
let secondplusElem = document.getElementById("plus2");
let secondmnusElem = document.getElementById("minus2");
// end


// calculate

let calculateBtnElem = document.getElementById("calculate");



maleBtnElem.addEventListener("click", function(){
    fontIconElem.style.filter = "brightness(100%)";
    h5Elem.style.filter = "brightness(100%)";
    fontIconElem2.style.filter = "brightness(80%)";
    h5Elem2.style.filter = "brightness(80%)";
})

FemaleBtnElem.addEventListener("click", function(){
    fontIconElem2.style.filter = "brightness(100%)";
    h5Elem2.style.filter = "brightness(100%)";
    fontIconElem.style.filter = "brightness(80%)";
    h5Elem.style.filter = "brightness(80%)";

})


range.addEventListener('input', function() {
    label.innerHTML = `${range.value}<span> cm</span>`;
});
  

// global variables

let firstCount = 40;
let ageCount = 10;


plusSignElem.addEventListener("click", function (){
    
    if (firstCount >= 100){
        weightvalElem.innerHTML = 100;
    }
    else{
        firstCount++;
        weightvalElem.innerHTML = firstCount;
    }
})

minusSignElem.addEventListener("click", function (){

    if (firstCount <= 40){
        weightvalElem.innerHTML = 40;
    }
    else{
        firstCount--;
        weightvalElem.innerHTML = firstCount;
    }
})


// End for weight

// age beginning

secondplusElem.addEventListener("click", function(){

    if (ageCount >= 100){
        agevalElem.innerHTML = 100;
    }
    else{
        ageCount++;
        agevalElem.innerHTML = ageCount;
    }
})

secondmnusElem.addEventListener("click", function(){

    if (ageCount <= 10){
        agevalElem.innerHTML = 10;
    }
    else{
        ageCount--;
        agevalElem.innerHTML = ageCount;
    }
})



// weight in kg / height in meters squared
// cm - m original cm / 100 

// Under 18.5	Underweight
// 18.5 – 24.9	Normal weight
// 25 – 29.9	Overweight
// 30 and above	Obese


// get the users range.value 

let mainConElem = document.querySelector(".container");
let resultElem = document.querySelector(".result");
let heading = document.querySelector(".heading");

let testnumber = document.getElementById("testnum");
let rangebmi = document.getElementById("bmirange");

let recalculateBMI = document.getElementById("recalculate");
let heading2 = document.querySelector(".heading2");

let commenting = document.getElementById("commenting");


// normal good or bad
let comment = document.getElementById("testres");

calculateBtnElem.addEventListener("click" , bmiCalculator);

function bmiCalculator(){
    let height = parseInt(range.value) / 100;
    let weight = parseInt(weightvalElem.innerHTML);
    let bmiResult = weight / (height * height);
    bmiResult = bmiResult.toFixed(1);
    heading.style.display = "none";
    mainConElem.style.display = "none";
    heading2.style.display = "block";
    resultElem.style.display = "flex";


    if (bmiResult < 18.5){
        comment.innerHTML = "Underweight";
        comment.style.fontSize = "3rem";
        comment.style.color = "red";
        testnumber.innerHTML = bmiResult;
        rangebmi.innerHTML = "Low BMI range: <br> 18.4 Kg/m2";
        commenting.innerHTML = "You are underweight. <br> Eat more!";
    }
    else if (bmiResult >= 25 && bmiResult <= 30){
        comment.innerHTML = "Overweight";
        comment.style.fontSize = "3rem";
        comment.style.color = "orange";
        testnumber.innerHTML = bmiResult;
        rangebmi.innerHTML  = "High BMI range: <br> 25 - 30 Kg/m2";
        commenting.innerHTML = "You are overweight. <br> Move more!";
    }
    else if (bmiResult >= 18.5 && bmiResult <= 25){
        comment.innerHTML = "Normal";
        comment.style.fontSize = "3rem";
        comment.style.color = "limegreen";
        testnumber.innerHTML = bmiResult;
        rangebmi.innerHTML = "Normal BMI range: <br> 18.5 - 25 Kg/m2";
        commenting.innerHTML = "You have a normal body weight. <br> Good job!";
        
    }
    else{
        comment.innerHTML = "Obese";
        comment.style.color = "red";
        testnumber.innerHTML = bmiResult;
        rangebmi.innerHTML = "Very High BMI range: <br> 30 Kg/m2";
        commenting.innerHTML = "You are morbidly obese. <br> Exercise More!"
    }
   
}

recalculateBMI.addEventListener("click", function (){

    heading.style.display = "block";
    mainConElem.style.display = "flex";
    heading2.style.display = "none";
    resultElem.style.display = "none";

})