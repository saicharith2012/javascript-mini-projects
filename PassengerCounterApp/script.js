// intialize the count as 0
let count = 0;

let countEl = document.getElementById("count-el"); // passing in arguments
let saveContent = document.getElementById("save-content");

// console.log(countEl)
let numberOfClicks = 0;

// listen for clicks on the increment button
function increment() {

  numberOfClicks += 1;

  // increment the count variable when the button is clicked
  count += 1;
  countEl.innerText = count;
  // console.log(count)
}

function decrement() {
  numberOfClicks -= 1;

  // increment the count variable when the button is clicked
  count -= 1;
  countEl.innerText = count;
  // console.log(count)
}

// saving the count
function save() {
  let saveMessage = numberOfClicks + " | ";
  saveContent.textContent += saveMessage;
  console.log(count);
  numberOfClicks = 0;
  //   console.log(saveMessage);
  console.log("New passengers arrived...Welcome!");
}

// clears all the count and entries
function warn() {
  alert("all your count will be erased! Do you want to continue?");
}

function clearAll() {
  warn();
  count = 0;
  countEl.textContent = count;
  console.log(count);
  saveContent.textContent = "";
}
