const resultDisplay = document.querySelector("#result")

function displayResult () {
    const value = document.querySelector("#value").value

    if (!value) {
        return
    }

    const result = value > 10 && value < 20  ? "Entre 10 y 20" : "Fuera del rango"
    
    resultDisplay.innerHTML = result
}