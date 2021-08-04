//capture the elements
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var bodyBackground = document.getElementById("gradient");
var random = document.getElementById("random");

//To Display the initial CSS linear gradient property on page load
css.textContent = "linear-gradient(to right,"+ color1.value + "," + color2.value + ")";


//Set gradient selected by user
function setGradient(){
    bodyBackground.style.background = 
    "linear-gradient(to right,"
     + color1.value
     + "," 
     + color2.value 
     + ")";

     css.textContent = bodyBackground.style.background + ";";
}


/*Generate a random color gradient
The number of colors that exist from black to white as per rgb values are 16777216.
Our ultimate goal is to convert the number into hexadecimal format and 16777216 converts to 1000000 and 16777215 converts to ffffff. 
Hence we proceed with 167777215 as the highest number for hexadecimal conversion.
*/

function setRandomColor(){
      
      var randomcolor1 = "#"+ Math.floor(Math.random()*16777215).toString(16).padStart(6,0);
      var randomcolor2 = "#"+ Math.floor(Math.random()*16777215).toString(16).padStart(6,0);

      bodyBackground.style.background = 
      "linear-gradient(to right," 
      + randomcolor1 
      + "," 
      + randomcolor2 
      + ")";
      
      color1.value = randomcolor1;
      
      color2.value = randomcolor2;

      css.textContent = bodyBackground.style.background + ";";
}



//Event Listerners
color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);

random.addEventListener("click",setRandomColor);