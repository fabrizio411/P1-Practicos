const resultDisplay = document.querySelector("#result")

function displayResult () {
    const value1 = parseInt(document.querySelector("#v1").value)
    const value2 = parseInt(document.querySelector("#v2").value)
    const operation = document.querySelector("#operation").value

    if (!value1 || !value2 || !operation) {
        return
    }

    let result

    switch (operation) {
        case "S":
            result = value1 + value2
            break;
        case "R":
            result = value1 - value2
            break;
        case "M":
            result = value1 * value2
            break;
        case "D":
            result = value1 / value2
            break;
        default:
            return
            break
    }
    
    resultDisplay.innerHTML = `Resultado: ${result}`
}