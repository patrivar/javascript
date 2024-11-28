
document.addEventListener("DOMContentLoaded", function() {
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }
    const number = parseInt(prompt("Enter an integer:"));
    const resultElement = document.getElementById("result");

    if (isPrime(number)) {
        resultElement.innerHTML = `${number} is a prime number.`;
    } else {
        resultElement.innerHTML = `${number} is not a prime number.`;
    }
});
