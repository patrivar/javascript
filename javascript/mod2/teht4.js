// Write a program that asks the user for numbers until he gives zero.
// The given numbers are printed in the console from the largest to the smallest.
let number;
const list = [];
do {
    number = parseInt(prompt("Anna numero(0=stop):"))
    if (number !== 0){
        list.push(number);
    }
} while (number !== 0);

console.log(list);
list.sort((a, b) => b - a);

console.log("Numerot suurimmasta pienimpään:")
for (const num of list) {
    console.log(num);
}
for (const numbers of list) {
    const listElement = document.createElement("li")
    listElement.textContent = numbers
    document.body.appendChild(listElement)
}
