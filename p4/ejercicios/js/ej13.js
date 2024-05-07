document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let palabra = document.querySelector('#text').value.toLowerCase()

    let primeraLetra = palabra[0].toLowerCase()

    let cant = 0

    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === primeraLetra) {
            cant++
        }
    }

    document.querySelector('#result').innerHTML = cant
}