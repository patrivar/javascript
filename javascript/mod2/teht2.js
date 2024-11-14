console.log('Assignments');

const nlist = document.querySelector('.namelist');
console.log(nlist);
// nlist.innerHTML = '<li>Ulla</li>';
let inner = '';


const num = parseInt(prompt('Please give a number of participants: '));
const names = [];



function askNames(){
    for (let i = 0; i < num; i++) {
        console.log(i);
        let name = prompt('Please give a name: ');
        names.push(name);
    }
    console.log(`Names: ${names}`);
}

function printNames() {
    // Printataan consoliin, 2 eri tapaa.
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
        inner += `<li>${names[i]}</li>`
        }

    console.log(inner)
    nlist.innerHTML = inner;

    let olElement = document.createElement('ol');
    document.body.appendChild(olElement);

    for (const name of names) {
        console.log(name);
        // inner += `<li>${names}</li>`
        let liElement = document.createElement('li');
        liElement.innerHTML = name;
        nlist.appendChild(liElement);
    }
}

askNames();
printNames();