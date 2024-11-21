'use strict';

console.log('script start')

async function fetchImages() {
    const response = await fetch('pics.json');
    // jos vastaus ok (eli statuskoodi on 2 alkuinen: 2xx
    if (response.ok) {
            const pics = await response.json();
            console.log('Kuvat: ', pics);
            for (const pic of pics) {
                const imgElement = document.createElement('img')
                imgElement.src = pic.address;
                imgElement.alt = pic.description;
                document.querySelector('img').appendChild(imgElement)
            }
    }
}

fetchImages()



// Chuck norris api esimerkki
async function getAJoke() {
    const outputElement = document.querySelector('#joke');
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        if (!response.ok) {
            //status koodi ei ok
            throw new Error(response.statusText);
        }
            const joke = await response.json()
            console.log('vitsi: ', joke.value);
            outputElement.textContent = joke.value;
    } catch (error) {
        console.log(error);
        outputElement.textContent = "Vitsin haku epäonnistui";
    }
}
document.querySelector('#get-joke').addEventListener('click', getAJoke);
// getAJoke(); laitettiin function käynnistys eventin sisään


async function fetchAirport(icao) {
    const response = await fetch('http://localhost:5000/airport/' + icao);
    const airport = await response.json();
    console.log('Airport data', airport);
    return airport
}

// fetchAirport();
const form = document.querySelector('#airport-form')
form.addEventListener('submit', async function (event) {
    event.preventDefault();
    // haetaan viittaus input-elementtiin ja sen arvoon (käyttäjän syöte)
    const userInput = form.querySelector('input').value
    const airport = await fetchAirport(userInput);
    console.log(airport);
});

document.querySelector('#joke').textContent = 'Odotetaan vieläkin';
console.log('script end');