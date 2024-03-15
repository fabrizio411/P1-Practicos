const resultDisplay = document.querySelector("#result")

function displayResult () {
    const value = document.querySelector("#value").value

    if (!value) {
        return
    }

    const result = value > 10 ? "Mayor que diez" : null
    
    resultDisplay.innerHTML = result
}