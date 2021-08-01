var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

var css = document.querySelector("h3");

var bodyBackground = document.getElementById("gradient");

css.textContent = "linear-gradient(to right"+ color1.value + "," + color2.value + ")";



function setGradient(){
    bodyBackground.style.background = 
    "linear-gradient(to right,"
     + color1.value
     + "," 
     + color2.value 
     + ")";

     css.textContent = bodyBackground.style.background + ";";
}

color1.addEventListener("input",setGradient);


color2.addEventListener("input",setGradient);