const addButton1 = document.querySelector(".button-add-1");
const addButton2 = document.querySelector(".button-add-2");
const addButton3 = document.querySelector(".button-add-3");

addButton1.addEventListener("click", addToList1);
addButton2.addEventListener("click", addToList2);
addButton3.addEventListener("click", addToList3);

function addToList1(){
    let newLi = addItem();
    document.querySelector(".list-today").appendChild(newLi);
}

function addToList2(){
    let newLi = addItem();
    document.querySelector(".list-eventually").appendChild(newLi);
}

function addToList3(){
    let newLi = addItem();
    const l1 = document.querySelector(".list-constant-1");
    const l2 = document.querySelector(".list-constant-2");
    const l3 = document.querySelector(".list-constant-3");

    if (l1.childElementCount === l3.childElementCount){
        l1.appendChild(newLi);
    }
    else if (l1.childElementCount > l2.childElementCount){
        l2.appendChild(newLi);
    }
    else{
        l3.appendChild(newLi);
    }
}

function addItem(){
    const item = prompt("Add an issue.");

    if (item !== ""){
        var newLi = document.createElement('li');
        newLi.appendChild(document.createTextNode(item));

        return newLi;
    }
}