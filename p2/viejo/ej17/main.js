const resultDisplay = document.querySelector("#result")

function displayResult () {
    const a = parseInt(document.querySelector("#a").value)
    
    if (!a) {
        return
    }

    resultDisplay.innerHTML = ""

    if (!(a >= 0 && a <= 10)) {
        resultDisplay.innerHTML = "A está fuera de rango"
    }
}