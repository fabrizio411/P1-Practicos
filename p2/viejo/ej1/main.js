const resultDisplay = document.querySelector("#result")

function displayResult () {
    const value = document.querySelector("#value").value

    if (!value) {
        return
    }

    const result = value < 0 ? "Negativo" : "Positivo"
    
    resultDisplay.innerHTML = `El numero es: ${result}`
}