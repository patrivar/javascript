
document.addEventListener("DOMContentLoaded", function(){
    const rolls = parseInt(prompt("Enter the number of dice rolls:"));
    let sum = 0;

    for (let i = 0; i < rolls; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        console.log(roll);
        sum += roll;
    }
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `The sum of the dice rolls is: ${sum}`;
});
