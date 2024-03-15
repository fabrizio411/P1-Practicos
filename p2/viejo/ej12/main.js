const resultDisplay = document.querySelector("#result")

function displayResult () {
    const letter = document.querySelector("#letter").value

    if (!letter) {
        return
    }

    const vocals = ["a", "e", "i", "o", "u"]

    const result = vocals.includes(letter.toLowerCase()) ? "Es vocal" : "No es vocal"

    resultDisplay.innerHTML = result
}