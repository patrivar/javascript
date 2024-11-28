document.addEventListener("DOMContentLoaded", function() {
    const startYear = parseInt(prompt("Enter the start year:"));
    const endYear = parseInt(prompt("Enter the end year:"));

    const resultElement = document.getElementById("result");
    const ulElement = document.createElement("ul");

    for (let year = startYear; year <= endYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            const liElement = document.createElement("li");
            liElement.textContent = year;
            ulElement.appendChild(liElement);
        }
    }
    resultElement.appendChild(ulElement);
});
