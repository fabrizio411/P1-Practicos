const resultDisplay = document.querySelector("#result")

function displayResult () {
    const value = document.querySelector("#value").value

    if (!value) {
        return
    }

    const result = value < -20 || value > 20  ? "CUMPLE" : "NO CUMPLE"
    
    resultDisplay.innerHTML = result
}