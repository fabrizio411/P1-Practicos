const resultDisplay = document.querySelector("#result")

function displayResult () {
    const value = document.querySelector("#value").value

    if (!value) {
        return
    }

    const result = value > 20 ? "Es mayor que 20" : "Es menor o igual a 20"
    
    resultDisplay.innerHTML = result
}