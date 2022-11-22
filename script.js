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

addClickListener(constantButton, constantTextBox, "");
addEnterKeyListener(constantTextBox, "");

function addClickListener(button, textBox, list){
    button.addEventListener("click", () => {
        if (textBox === document.querySelector(".constant__textBox")){
            list = chooseConstantList();
        }
        addToList(textBox, list);
    });
}
function addEnterKeyListener(textBox, list){
    textBox.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            if (textBox === document.querySelector(".constant__textBox")){
                list = chooseConstantList();
            }
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
        let newLi = document.createElement('li');
        newLi.appendChild(document.createTextNode(textBox.value));
        document.querySelector(list).appendChild(newLi);
        
        //adds event listener to change the text to strikethough when clicked
        newLi.addEventListener('click', () => {
            crossOut(newLi);
        });

        textBox.value = "";
    }
}

//Function to decide which of the three lists to add an item to when using the constant tasks button
function chooseConstantList(){
    const l1 = document.querySelector(".constant__list1");
    const l2 = document.querySelector(".constant__list2");
    const l3 = document.querySelector(".constant__list3");

    if (l1.childElementCount === l3.childElementCount){
        return ".constant__list1";
    }
    else if (l1.childElementCount > l2.childElementCount){
        return ".constant__list2";
    }
    else{
        return ".constant__list3";
    }
}

//Function to make a <li> strikethrough text if not already and to make it plaintext if it is already struckthrough
function crossOut(listToCross){
    if (listToCross.innerHTML[0] !== '<'){
        listToCross.innerHTML = "<s>" + listToCross.innerHTML + "</s>";
    }
    else{
        listToCross.innerHTML = listToCross.innerHTML.slice(3, (listToCross.innerHTML.length - 4));
    }
}