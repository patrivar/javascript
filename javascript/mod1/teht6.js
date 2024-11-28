
document.addEventListener("DOMContentLoaded", function() {
    const calculate = confirm("Should I calculate the square root?");
    const targetElement = document.getElementById("target");

    if (calculate) {
        const number = parseFloat(prompt("Enter a number:"));
        if (number < 0) {
            targetElement.innerHTML = "The square root of a negative number is not defined.";
        } else {
            const squareRoot = Math.sqrt(number);
            targetElement.innerHTML = `The square root of ${number} is ${squareRoot}.`;
        }
    } else {
        targetElement.innerHTML = "The square root is not calculated.";
    }
});
