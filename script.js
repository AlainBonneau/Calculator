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
    display.value = new Function("return " + display.value)();
    if (display.value === errors[0] || display.value === errors[1]) {
      clearDisplay();
    }
  } catch (error) {
    display.value = "Error";
  }
}
