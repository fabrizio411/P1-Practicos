const resultDisplay = document.querySelector("#result")

function displayResult () {
    const value = document.querySelector("#value").value
    if (!value) {
        return
    }

    const result = value % 3 === 0 && value % 7 === 0  ? "Multiplo de 3 y 7" : "No multiplo"
    
    resultDisplay.innerHTML = result
}