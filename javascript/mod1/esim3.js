'use strict';
console.log("Hello world");

// Moduuli 1 esimerkkikoodeja

// arvotaan testinumero
const randomNumber = Math.random();
console.log('arvottu nummero', randomNumber)

// ehtolause, ehdon täytyy olla aina true/false
// 49.9% todennäköisyys
if (randomNumber < 0.495) {
    console.log("Kruuna");
} else if (randomNumber > 0.505) {
    console.log("Klaava");
} else {console.log("Kolikko jää kantilleen.");

}
console.log("suoritus jatkuu ehtolauseen jälkeen");

const cabinClass = prompt("Enter the cabin class (A/B/C).");
switch (cabinClass) {
    case 'A':
        console.log('Top deck cabin with window.');
        break;
    case 'B':
        console.log('Top deck cabin without window.');
        break;
    case 'C':
        console.log('Windowless cabin under the car deck.');
        break;
    default:
        console.log("Invalid cabin class.");
}

// Toistorakenteet eli silmukat eli loopit

// ehtolause, ehdon täytyy olla aina true/false
// 49.9% todennäköisyys
// kuinka monta heittoa, että kolikko jää kyljelleen?
let throwCount = 0
let stillThrowing = true;
while (stillThrowing) {
    const randomNumber = Math.random();
    throwCount++;
    if (randomNumber < 0.495) {
        console.log("Kruuna");
    } else if (randomNumber > 0.505) {
        console.log("Klaava");
    } else {
        console.log("Kolikko jää kantilleen.");
        console.log("Heittojen lkm", throwCount)
        stillThrowing = false;
    }
}

// simppeli for-silmukka
for (let i = 5; i <= 50 ; i += 5) {
    console.log('iin arvo', i);
}

// Kuinka monta heittoa menee keskimäärin, että kolikko jää kantilleen
const throwCounts = [];
for (let i = 0; i < 100; i++) {
    let throwCount = 0
    let stillThrowing = true;
    while (stillThrowing) {
        const randomNumber = Math.random();
        throwCount++;
        if (randomNumber < 0.495) {
            console.log("Kruuna");
        } else if (randomNumber > 0.505) {
            console.log("Klaava");
        } else {
            console.log("Kolikko jää kantilleen.");
            console.log("Heittojen lkm", throwCount)
            throwCounts.push(throwCount)
            stillThrowing = false;
        }
    }
}
console.log("Heittojen lukumäärät", throwCounts);

// Lasketaan heittomäärien summa for-silmukalla
let sum = 0;
for (let i = 0; i <throwCounts.length; i++) {
    sum += throwCounts[i];
}
console.log("Heittojen ka:", sum/throwCounts.length);