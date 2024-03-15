const resultDisplay = document.querySelector("#result")

function displayResult () {
    const millas = document.querySelector("#millas").value
    const isPlus = document.querySelector("#isPlus").value

    if (!millas || !isPlus) {
        return
    }

    let millasTotal = isPlus == "s" ? millas * 2 : millas

    let result = "No dispone de suficientes millas"

    if (millasTotal >= 60000) {
        result = "Europa"
    } else if (millasTotal >= 30000) {
        result = "América del Norte"
    } else if (millasTotal >- 15000) {
        result = "América del Sur"
    }
    
    resultDisplay.innerHTML = `${millasTotal < 15000 ? null : "Destino mas lejano:"} ${result}`
}