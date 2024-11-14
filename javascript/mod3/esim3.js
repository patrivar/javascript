// Haetaan viittaus johonkin solmuun (node) DOMissa
const h1Elem = document.querySelector('h1');
console.log(h1Elem);
// Muokataan DOMia
const title = h1Elem.textContent;
h1Elem.textContent = title + '+ Lisäys otsikkoon';
h1Elem.style.fontSize = '22px';
h1Elem.classList.add('text')
// Piilotetaan elementti css:n avulla
h1Elem.classList.add('hidden');
// Näytetään taas
h1Elem.classList.remove('hidden');

// Koko bodyn piilotus
//h1Elem.parentElement.classList.add('hidden');

// Lisätään sisältöä sivulle
const pElem = document.createElement('p');
document.querySelector('main').append(pElem);
pElem.textContent = 'Hululululuuuuu...!';

// Haetaan viittaus useampaan elementtiin/nodeen kerrallaa
//const paragraph = document.querySelectorAll('p');
// console.log(paragraph);
/*
paragraph[2].textContent = 'Kolmas kappale.';
// Iteroidaan kaikki kappaleet läpi
for (const p of paragraph) {
    console.log(p);
    p.textcontent = 'Päivitetty!';
}
*/
// Tehdään järjestetty lista jossa 5 alkiota
/*
const olElement = document.createElement('ol');
 */
const listContents = ["kynä", "reppu", "pupetti"];
const listDiv = document.querySelector('#list');

function renderList(items) {
    listDiv.innerHTML = '';
    const olElement = document.createElement('ol');
    for (let i = 0; i < items.length; i++) {
        const newLi = document.createElement('li');
        newLi.textContent = items[i];
        olElement.append(newLi);
    }
    listDiv.append(olElement);
}

//renderList(listContents);
listContents.push('tietskari');
listContents.sort();


// Selaimen "sijainti" (URL)
window.console.log(window.location.href);
// Siirrytään johonkin toiseen osoitteeseen
// window.location.href = 'https://www.google.fi';


// Tapahtuman käsittelyy eli eventti
const printButton = document.querySelector('#print')
console.log(printButton)
// Asetetaan napille tapahtumankäsittelijä click-eventtille
printButton.addEventListener('click', clickHandler);

function clickHandler(event) {
    console.log('button clicked, event: ', event);
    renderList(listContents);
};
// Asioiden lisäys listalle
const addButton = document.querySelector('#add')
console.log(addButton)
// Asetetaan napille tapahtumankäsittelijä click-eventtille
addButton.addEventListener('click', () => {
    renderList(listContents);
    const newItem = window.prompt("Lisää jotain listaan:");
    listContents.push(newItem);
});

// Hiiritapahtumia
document.addEventListener('mousemove', function (event) {
    //console.log(event);
    document.querySelector('#output').textContent = `Hiiren 
    osoittimen koordinaatit: ${event.clientX}, ${event.clientY}`;
    // Näytetään h1 kun hiiri menee riittävän alas dokumentilla
    if (event.clientY > 300) {
        h1Elem.classList.remove('hidden');
    }
});

h1Elem.addEventListener('mouseenter', function (event) {
    // Piilotetaan elementti css:n avulla, kun hiiren osoitin menee sen päälle
    h1Elem.classList.add('hidden');
});

// Näppiseventti (h piilottaa ja näyttää koko sivun)
const keyLog = []
let hidden = false
document.addEventListener('keypress', function (event) {
    //console.log('Näppäin: ',event.key)
    keyLog.push(event.key);
    console.log('Logi', keyLog);
    if (event.key === 'h') {
        if (!hidden) {
            document.querySelector('body').classList.add('hidden');
        } else {
            document.querySelector('body').classList.remove('hidden');
        }
        hidden = !hidden;
    }
})

// Estetään formin automaattinen  lähetys (sivun päivitys) esim kun käytössä on nappula send
const form = document.querySelector('form')
from.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log(event)
});
