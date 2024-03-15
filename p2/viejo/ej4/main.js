const resultDisplay = document.querySelector("#result")

function displayResult () {
    const value = document.querySelector("#value").value

    if (!value) {
        return
    }

    let result = value

    if (value < 0) {
        result = value * -1
    }
    
    resultDisplay.innerHTML = result
}