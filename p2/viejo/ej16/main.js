const resultDisplay = document.querySelector("#result")

function displayResult () {
    const a = parseInt(document.querySelector("#a").value)
    const b = parseInt(document.querySelector("#b").value)
    const c = parseInt(document.querySelector("#c").value)
    
    if (!a || !b || !c) {
        return
    }

    resultDisplay.innerHTML = ""

    if (a > b && a > c) {
        resultDisplay.innerHTML = "A es el mayor de todos"
    }
}