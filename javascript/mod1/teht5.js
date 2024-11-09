function leapyear(vuosi) {
    if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || (vuosi % 400 === 0)){
        return true
    } else {
        return false
    }
}

var vuosi = prompt("Anna vuosiluku:");
vuosi = parseFloat(vuosi);

var result = leapyear(vuosi) ? vuosi + " on karkausvuosi." : vuosi + " ei ole karkausvuosi.";

var resultElement = document.createElement("p");
resultElement.textContent = result;

document.body.appendChild(resultElement);