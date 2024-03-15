const resultDisplay = document.querySelector("#result")

function displayResult () {
    const value1 = document.querySelector("#v1").value
    const value2 = document.querySelector("#v2").value

    if (!value1 || !value2) {
        return
    }

    const result = value1 % value2 === 0 ? "Es múltiplo" : "No es múltiplo"
    
    resultDisplay.innerHTML = `Resultado: ${result}`
}