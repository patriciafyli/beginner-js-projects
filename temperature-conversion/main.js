// semicolons are not necessary for Javascript, but can be used to indicate end of statement
// commonly used version of Javascript (?) still enforces semicolon usage
// CMD + OPTION + I = developer tools shortcut in Chrome

var fahrenheit = document.getElementById('fahrenheit');
var fToC = document.getElementById('fToC');
var celsius = document.getElementById('celsius');
var cToF = document.getElementById('cToF');
var conversion = document.getElementById('conversion'); // id of the HTML paragraph

function convertToCelsius(fahrenheit) {
    // convert Fahrenheit to Celsius, rounded down to nearest integer
    return Math.floor((fahrenheit - 32) * 0.5556)
}

function convertToFahrenheit(celsius) {
    return celsius * 1.8 + 32
}

function displayFToC() {
    var display = convertToCelsius(fahrenheit.value)
    // console.log('what is f', fahrenheit)
    // console.log('displayFToC', display) // console log is used frequently to track variable changes
    conversion.textContent = 'Result: ' + display
}

function displayCToF() {
    var display = convertToFahrenheit(celsius.value)
    conversion.textContent = 'Result: ' + display
}

// add event to element
// fToC.onClick() is one option
fToC.addEventListener('click', displayFToC)
cToF.addEventListener('click', displayCToF)