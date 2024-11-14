// Write a program that asks for the names of six dogs. The program prints dog
// names to unordered list <ul> in reverse alphabetical order.
const dogs = [];
for (let i = 0; i < 6; i++) {
    const dog = prompt("Anna koiran nimi: ");
    dogs.push(dog);
}
console.log(`Nimet: ${dogs}`);
dogs.reverse()
console.log(dogs)

const dogoElement = document.createElement("ul");
document.body.appendChild(dogoElement);

for (const dog of dogs) {
    const listItem = document.createElement("li")
    listItem.textContent = dog;
    dogoElement.appendChild(listItem);
}


