const celsius = document.getElementById("input-celsius");
const kelvin = document.getElementById("input-kelvin");
const fahrenheit = document.getElementById("input-farenheit");

// Convert from Celsius
celsius.addEventListener("input", function() {
    let c = parseFloat(celsius.value);

    if (!isNaN(c)) {
        kelvin.value = (c + 273.15).toFixed(2);
        fahrenheit.value = ((c * 9 / 5) + 32).toFixed(2);
    } else {
        kelvin.value = "";
        fahrenheit.value = "";
    }
});

// Convert from Kelvin
kelvin.addEventListener("input", function() {
    let k = parseFloat(kelvin.value);

    if (!isNaN(k)) {
        celsius.value = (k - 273.15).toFixed(2);
        fahrenheit.value = (((k - 273.15) * 9 / 5) + 32).toFixed(2);
    } else {
        celsius.value = "";
        fahrenheit.value = "";
    }
});

// Convert from Fahrenheit
fahrenheit.addEventListener("input", function() {
    let f = parseFloat(fahrenheit.value);

    if (!isNaN(f)) {
        celsius.value = ((f - 32) * 5 / 9).toFixed(2);
        kelvin.value = (((f - 32) * 5 / 9) + 273.15).toFixed(2);
    } else {
        celsius.value = "";
        kelvin.value = "";
    }
});