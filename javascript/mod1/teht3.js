var luku1 = prompt("(1/3)Anna ensimmäinen luku:");
var luku2 = prompt("(2/3)Anna toinen luku:");
var luku3 = prompt("(3/3)Anna kolmas luku:");

luku1 = parseFloat(luku1);
luku2 = parseFloat(luku2);
luku3 = parseFloat(luku3);

const summa = luku1 + luku2 + luku3;
const ka = summa / 3;

console.log(summa);
console.log(ka);

var summaElement = document.createElement("p");
summaElement.textContent = "Lukujen summa on: " + summa;

var kaElement = document.createElement("p");
kaElement.textContent = "Lukujen keskiarvo on: " + ka;

document.body.appendChild(summaElement);
document.body.appendChild(kaElement);
