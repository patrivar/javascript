// Modify the function above so that it gets the number of sides on the dice as a parameter.
// With the modified function you can for example roll a 21-sided role-playing dice.
// The difference to the last exercise is that the dice rolling in the main program continues
// until the program gets the maximum number on the dice, which is asked from the user at the beginning.

function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

document.addEventListener('DOMContentLoaded', function() {
    const sides = parseInt(prompt("Enter the number of sides on the dice:"), 10);
    const ulElement = document.createElement('ul');
    document.body.appendChild(ulElement);
    let roll;
    do {
        roll = rollDice(sides);
        const listItem = document.createElement('li');
        listItem.textContent = `Heitit: ${roll}`;
        ulElement.appendChild(listItem);
    } while (roll !== sides);
});
