const nlist = document.querySelector('.namelist');
let inner = '';
const num = parseInt(prompt('Please give the number of participants: '));
const names = [];

function askNames() {
    for (let i = 0; i < num; i++) {
        let name = prompt('Please give a name: ');
        names.push(name);
    }
}
function printNames() {
    names.sort();
    for (let i = 0; i < names.length; i++) {
        inner += `<li>${names[i]}</li>`;
    } nlist.innerHTML = inner;
}
askNames();
printNames();