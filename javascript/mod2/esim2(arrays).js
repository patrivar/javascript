'use strict';
console.log('Hello again!');

// Taulukot eli arrays
const items = [1,2,3,{name:'Olio'},[3,4,5],'Merkkijono']
console.log(items);

// alkioon viitataa  ihan perus indexillä
console.log(items[0]);
// alkion arvoa voidaan muuttaa taai lisätä indeksin avulla
items[0] = 99;
console.log(items);
items[9] = 'Olen uusi jäsen';

// välissä on nyt ns määrittelemätön arvo/alkio eli undefined
console.log(items[6]);

console.log('taulukon pituus: ', items.length);

// taulukoiden läpikäynti loopin avulla
console.log('____________________________');
console.log('Perinteinen for-i looppi');

for (let i = 0; i < items.length; i++) {
    console.log(i, items[i]);
}

console.log('_________________________')
console.log('For/in rakenteella, jolla saadaan avain/indeksi ja sen arvo');
for (const index in items) {
    console.log(index, items[index]);
}
for (const item of items) {
    // if lause jossa tutkitaan onko alkio undefined
    if (item != undefined){
        console.log(item)
    }
}

const names = ['Frank', 'Scott', 'Jasmine', 'Don'];
const ages = [23,32,1,62];

for (let name of names) {
    console.log(`Name: ${name}`);
}

/*
sort() sorts the array alphabetically
reverse() reverses the items in the array in reverse order
shift() deletes and returns the 1st item in the array
pop() deletes and returns the last item in the array
push(value) adds the value at the end of the array, multiple values separated by commas
includes(value) checks whether the array contains the given value
 */

// järjestä aakkosjärjestykseen
// names.sort().reverse();
names.sort();
console.log(names);
names.reverse();
console.log(names);

// ei toimi numeroiden kanssa sellaisenaan
ages.sort((a, b) => a - b);
console.log(ages);
ages.sort((a, b) => b - a);
console.log(ages);

// lisätään nimi taulukon loppuun
names.push('Siiri')
const newLenght = names.push('Kamilla')
console.log(names);
console.log('Taulukon pituus: ', newLenght);
// lisätään taulukon alkuun
names.unshift('Martti')
console.log(names);

const lastName = names.pop();
console.log(lastName);
console.log(names)

const firstName = names.shift();
console.log(firstName);
console.log(names)

// etsitään onko taulukossa ko. arvo palauttaa trur/false
console.log(names.includes('Scott'))

console.log('_____________________')

// object literal eli olio
// samankaltainen kun pythonin sanakirja

const duck = {
    name: 'Iines',
    age: 32
}

console.log(duck);
console.log(duck['age'])

// muutetaan arvoja
duck['age'] = 33
duck.name = 'Iines Ankka'
console.log(duck);

// lisätään uusia ominaisuuksia
duck.profession = '"Working like a duck"';
console.log(duck);

let moikkaus = ('Hei, olen ' + duck['name'] + '.');
console.log(moikkaus);
let moikkaus1 = ('Olen ' + duck['age'] +  ' vuoden ikäinen ja mottoni on ' + duck.profession + '!');
console.log(moikkaus1);


const duck2 = {
    name: 'Aku',
    age: 40,
    getInfo: function(){
        return this.name + ' on ' + this.age + '-vuotias.'
    }
};
console.log(duck2.getInfo());

// JS funktiot

// perinteinen funnktiomäärittely
function greet(name) {
    console.log(`Greetings ${name}!`)
};

// function expression. Funktio joka on anonyymi mutta tallennetaan muuttujaan.
const greet2 =function(name) {
    console.log(`Greetings again ${name}!`)
};

// arrow funktio / nuolifunktio, edellistä yksinkertaisempi ja lyhyempi

const greet3 = (name) => {
    console.log(`Greetings for a third time ${name}!`)
}

greet('Ulla');
greet2('Ulla');
greet3('Ulla')

const nimi = 'Matti';

function logName() {
    console.log(nimi)
}

logName();