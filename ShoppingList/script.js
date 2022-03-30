console.log("Welcome!")

let input = document.getElementById("userinput")
// console.log(input)
let button = document.getElementById("enter")
// console.log(enter)
let ul = document.querySelector("ul")
// console.log(ul)


function inputlength(){
    return input.value.length
}

function createListElement(){
    let li = document.createElement("li") //creating a list element on click
    li.appendChild(document.createTextNode(input.value)) //adding input value to the element
    console.log(li.textContent)
    ul.appendChild(li) //adding the newly created elemnet to the unordered list as a child
    input.value = "" //making the previously entered input value vanish
    console.log("New item added!")
}


function addListByClick(){
    if(inputlength() > 0){
        createListElement()
    }
}

function addListByKeyPress(event){
    if(inputlength() > 0 && event.keyCode ===13){
        createListElement()
    }
}

button.addEventListener("click",addListByClick)

input.addEventListener("keypress",addListByKeyPress)