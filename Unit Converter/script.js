let numberEl = document.getElementById("number-el");

let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

let number = 1;

function length() {
  lengthEl.textContent = 
    number +
    " meters = " +
    (number * 3.28084).toFixed(3) +
    " feet | " +
    number +
    " feet = " +
    (number * 0.3048).toFixed(3) +
    " meters";
  // console.log(lengthEl.textContent)
}

function volume() {
  volumeEl.textContent =
    number +
    " liters = " +
    (number * 0.264172).toFixed(3) +
    " gallons | " +
    number +
    " gallons = " +
    (number * 3.78541).toFixed(3) +
    " liters";
  // console.log(volumeEl.textContent)
}

function mass() {
  massEl.textContent =
    number +
    " kilos = " +
    (number * 2.20462).toFixed(3) +
    " pounds | " +
    number +
    " pounds = " +
    (number * 0.453592).toFixed(3) +
    " kilos";
  // console.log(massEl.textContent)
}

length();
volume();
mass();//these functions will run when the number is hardcoded


// function to output the results based on user input
function result() {
  number = prompt("Enter any number");
  if(number>0){
  numberEl.textContent = number;
  console.log(Number(numberEl.textContent));

  //length
  length();

  //volume
  volume();

  // mass
  mass();
}
}
