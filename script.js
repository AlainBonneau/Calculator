// Calculator Javascript
const display = document.getElementById("display");
const errors = ["function Error() { [native code] }", "undefined"];
function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay() {
    display.value = "";
}
function calculate() {
    try {
        // Evaluer le code dans display.value comme une expression mathématique
        const result = new Function("return " + display.value)();
        // Vérifier si le résultat est défini et non une erreur
        if (result === undefined || result === null || isNaN(result)) {
            display.value = "Error";
        }
        else {
            display.value = result.toString();
        }
    }
    catch (error) {
        display.value = "Error";
    }
}
