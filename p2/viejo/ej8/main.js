const resultDisplay = document.querySelector("#result")

function displayResult () {
    const value = document.querySelector("#value").value

    if (!value) {
        return
    }

    const result = value > 30 ? "Es mayor que 30" : value < 10 ? "Menor que 10" : "Entre 10 y 30"
    
    resultDisplay.innerHTML = result
}