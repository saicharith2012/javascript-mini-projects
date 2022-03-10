
// intialize the count as 0
let count = 0

let countEl = document.getElementById("count-el") // passing in arguments
let saveEl = document.getElementById("save-el")

// console.log(countEl)

// listen for clicks on the increment button
function increment(){
    console.log('New passengers arrived...Welcome!')
    // increment the count variable when the button is clicked
    count += 1
    countEl.innerText = count
    // console.log(count)
}

function save(){
    let saveMessage = count + ' - '
    saveEl.textContent += saveMessage
    console.log(count)
    //setting back the count to 0 after saving the prev count
    count = 0
    countEl.innerText = count
}