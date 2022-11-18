const addButton1 = document.querySelector(".button-add-1");
const addButton2 = document.querySelector(".button-add-2");
const addButton3 = document.querySelector(".button-add-3");

addButton1.addEventListener("click", addToList1);
document.querySelector(".text-1").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      addToList1();
    }
});
addButton2.addEventListener("click", addToList2);
document.querySelector(".text-2").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      addToList2();
    }
});
addButton3.addEventListener("click", addToList3);
document.querySelector(".text-3").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      addToList3();
    }
});

//I really tried to get this to work as a function with arguments so there could be only one function instead of three but there is some horrible arcane
//secret involved in getting "click" to work with a function that has parameters FOR SOME REASON??????????? so... this is what we get.
function addToList1(){
    let textBox = document.querySelector(".text-1");
    if (textBox.value === ""){
        document.querySelector(".text-1").focus();
    }
    else{
        var newLi = document.createElement('li');
        newLi.appendChild(document.createTextNode(textBox.value));
        document.querySelector(".list-today").appendChild(newLi);

        textBox.value = "";
    }
}

function addToList2(){
    let textBox = document.querySelector(".text-2");
    if (textBox.value === ""){
        document.querySelector(".text-2").focus();
    }
    else{
        var newLi = document.createElement('li');
        newLi.appendChild(document.createTextNode(textBox.value));
        document.querySelector(".list-eventually").appendChild(newLi);

        textBox.value = "";
    }
}

function addToList3(){
    let textBox = document.querySelector(".text-3");
    if (textBox.value === ""){
        document.querySelector(".text-3").focus();
    }
    else{
        var newLi = document.createElement('li');
        newLi.appendChild(document.createTextNode(textBox.value));
        
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

        textBox.value = "";
    }
}