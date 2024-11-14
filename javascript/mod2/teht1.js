/*
const num1 = prompt("Anna ensimmäinen luku:")
const num2 = prompt("Anna toinen luku:")
const num3 = prompt("Anna kolmas luku:")
const num4 = prompt("Anna neljäs luku:")
const num5 = prompt("Anna viides luku:")
*/
const nlist = document.querySelector('.namelist');
let list = []
let list2 = []
for (let i = 0; i < 5; i++) {
    let number = prompt(`Anna luku ${i + 1}:`)
    list.push(Number(number))
};
console.log(list)
console.log("Numerot käänteisessä järjestyksessä:")
for (let i = list.length -1; i >= 0; i--){
    console.log(list[i])
    list2.push(list[i])
};

console.log(list2)

for (const listEle of list2) {
    let list2Element = document.createElement("li")
    list2Element.innerHTML = listEle
    nlist.appendChild(list2Element)
}

