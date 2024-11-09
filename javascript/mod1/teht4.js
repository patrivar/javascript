var wizard = prompt("Kerro nimesi niin lajittelemme sinut tupaan.");
var wizardclass = Math.floor(Math.random()*4)+1;

if (wizardclass == 1) {
    wz = "Luihuinen"
}   else if (wizardclass == 2) {
    wz = "Rohkelikko"
}   else if (wizardclass == 3) {
    wz = "Korpinkynsi"
}   else if (wizardclass == 4) {
    wz = "Puuskupuh"
}

var wizardElement = document.createElement("p");
wizardElement.textContent = wizard + ", " + "tupasi on " + wz + ".";

document.body.appendChild(wizardElement);