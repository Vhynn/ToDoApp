const addButton1 = document.querySelector(".button-add-1");
const addButton2 = document.querySelector(".button-add-2");
const addButton3 = document.querySelector(".button-add-3");

addButton1.addEventListener("click", function () {
    addToList(".text-1", ".list-today");
});
document.querySelector(".text-1").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addToList(".text-1", ".list-today");
    }
});

addButton2.addEventListener("click", function () {
    addToList(".text-2", ".list-eventually");
});
document.querySelector(".text-2").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addToList(".text-2", ".list-eventually");
    }
});

addButton3.addEventListener("click", function () {
    let listType = chooseConstantList();
    addToList(".text-3", listType);
});
document.querySelector(".text-3").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        let listType = chooseConstantList();
        addToList(".text-3", listType);
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
    const l1 = document.querySelector(".list-constant-1");
    const l2 = document.querySelector(".list-constant-2");
    const l3 = document.querySelector(".list-constant-3");

    if (l1.childElementCount === l3.childElementCount){
        return ".list-constant-1";
    }
    else if (l1.childElementCount > l2.childElementCount){
        return ".list-constant-2";
    }
    else{
        return ".list-constant-3";
    }
}