const resultDisplay = document.querySelector("#result")

function displayResult () {
    const value1 = parseInt(document.querySelector("#v1").value)
    const value2 = parseInt(document.querySelector("#v2").value)

    if (!value1 || !value2) {
        return
    }

    const result = value1 > value2 ? value1 - value2 : value2 - value1
    
    resultDisplay.innerHTML = `Resultado: ${result}`
}