const dailyButton = document.querySelector(".daily__button");
const generalButton = document.querySelector(".general__button");
const constantButton = document.querySelector(".constant__button");

dailyButton.addEventListener("click", function () {
    addToList(".daily__textBox", ".daily__list");
});
document.querySelector(".daily__textBox").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addToList(".daily__textBox", ".daily__list");
    }
});

generalButton.addEventListener("click", function () {
    addToList(".general__textBox", ".general__list");
});
document.querySelector(".general__textBox").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addToList(".general__textBox", ".general__list");
    }
});

constantButton.addEventListener("click", function () {
    let listType = chooseConstantList();
    addToList(".constant__textBox", listType);
});
document.querySelector(".constant__textBox").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        let listType = chooseConstantList();
        addToList(".constant__textBox", listType);
    }
});

function addToList(textNumber, listType){
    let textBox = document.querySelector(textNumber);
    if (textBox.value === ""){
        textBox.focus();
    }
    else{
        let newLi = document.createElement('li');
        newLi.appendChild(document.createTextNode(textBox.value));
        document.querySelector(listType).appendChild(newLi);

        textBox.value = "";
    }
}

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