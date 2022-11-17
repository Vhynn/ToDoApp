const addButton1 = document.querySelector(".button-add-1");
const addButton2 = document.querySelector(".button-add-2");

addButton1.addEventListener("click", addToList1);
addButton2.addEventListener("click", addToList2);

function addToList1(){
    let newLi = addItem();
    document.querySelector(".list-today").appendChild(newLi);
}

function addToList2(){
    let newLi = addItem();
    document.querySelector(".list-eventually").appendChild(newLi);
}

function addItem(){
    const item = prompt("Add an issue.");

    if (item !== ""){
        var newLi = document.createElement('li');
        newLi.appendChild(document.createTextNode(item));

        return newLi;
    }
}