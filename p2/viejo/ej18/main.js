const resultDisplay = document.querySelector("#result")

function displayResult () {
    const valores = document.querySelector("#valores").value

    if (!valores) {
        return
    }

    const valArr_str = valores.split(" ")
    const valArr_num = valArr_str.map((val) => parseInt(val))

    const result = valArr_num.reduce((acc, num) => acc += num)

    resultDisplay.innerHTML = `La suma de los valores es: ${result}`
}