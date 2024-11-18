// Write a program that prompts the user for numbers.
// When the user enters one of the numbers he previously entered,
// the program will announce that the number has already been given
// and stops its operation and then prints all the given numbers to the
// console in ascending order.

const numbers = [];
let number;
while (true) {
    number = parseInt(prompt("Enter a number:"));
    if (numbers.includes(number)) {
        break;
    }
    numbers.push(number);
} numbers.sort((a, b) => a - b);

for (const num of numbers) {
console.log(num);
}

for (const num of numbers) {
    const listElement = document.createElement("li")
    listElement.textContent = num;
    document.body.appendChild(listElement)
}