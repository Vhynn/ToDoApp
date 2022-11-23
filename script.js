//Set the buttons as const just to keep things a bit cleaner
const dailyButton = document.querySelector(".daily__button");
const generalButton = document.querySelector(".general__button");
const constantButton = document.querySelector(".constant__button");

const dailyTextBox = document.querySelector(".daily__textBox");
const generalTextBox = document.querySelector(".general__textBox");
const constantTextBox = document.querySelector(".constant__textBox");

//Event listeners for clicking on the three "add item" buttons or pressing the enter key when the three text boxes are in focus
addClickListener(dailyButton, dailyTextBox, ".daily__list");
addEnterKeyListener(dailyTextBox, ".daily__list");

addClickListener(generalButton, generalTextBox, ".general__list");
addEnterKeyListener(generalTextBox, ".general__list");

addClickListener(constantButton, constantTextBox, ".constant__list");
addEnterKeyListener(constantTextBox, ".constant__list");

function addClickListener(button, textBox, list){
    button.addEventListener("click", () => {
        addToList(textBox, list);
    });
}
function addEnterKeyListener(textBox, list){
    textBox.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            addToList(textBox, list);
        }
    });
}

//The main function to add an item to a list. It checks to make sure that the text box has content before adding to the list to avoid empty items
function addToList(textBox, list){
    if (textBox.value === ""){
        textBox.focus();
    }
    else{
        let newLi = document.createElement("li");
        //bit of code to add a class to constant list items
        if (list === ".constant__list"){
            newLi.classList.add("constant__list--item")
        }
        newLi.appendChild(document.createTextNode(textBox.value));
        document.querySelector(list).appendChild(newLi);
        
        //adds event listener to change the text to strikethough when clicked
        newLi.addEventListener('click', () => {
            crossOut(newLi);
        });

        textBox.value = "";
    }
}

//Function to make a <li> strikethrough text if not already and to make it plaintext if it is already struckthrough
function crossOut(listToCross){
    if (listToCross.innerHTML.startsWith("<s>") && listToCross.innerHTML.endsWith("</s>")){
        listToCross.innerHTML = listToCross.innerHTML.slice(3, (listToCross.innerHTML.length - 4));
    }
    else{
        listToCross.innerHTML = "<s>" + listToCross.innerHTML + "</s>";
    }
}