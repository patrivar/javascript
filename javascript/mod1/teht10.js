
document.addEventListener("DOMContentLoaded", function() {
    const numberOfDice = parseInt(prompt("Enter the number of dice:"));
    const targetSum = parseInt(prompt("Enter the sum of the eye numbers of interest:"));

    const rolls = 10000;
    let successCount = 0;

    function rollDie() {
        return Math.floor(Math.random() * 6) + 1;
    }
    for (let i = 0; i < rolls; i++) {
        let sum = 0;
        for (let j = 0; j < numberOfDice; j++) {
            sum += rollDie();
        }
        if (sum === targetSum) {
            successCount++;
        }
    }
    const probability = (successCount / rolls) * 100;
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `Probability to get sum ${targetSum} with ${numberOfDice} dice is ${probability.toFixed(2)}%.`;
});
