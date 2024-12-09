// Write a function that returns a random dice roll between 1 and 6.
// The function should not have any parameters. Write a main program
// that rolls the dice until the result is 6. The main program should
// print out the result of each roll in an unordered list (<ul>).

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

document.addEventListener('DOMContentLoaded', function() {
    const ulElement = document.createElement('ul');
    document.body.appendChild(ulElement);
    let roll;
    do {
        roll = rollDice();
        const listItem = document.createElement('li');
        listItem.textContent = `Heitit: ${roll}`;
        ulElement.appendChild(listItem);
    } while (roll !== 6);
});
