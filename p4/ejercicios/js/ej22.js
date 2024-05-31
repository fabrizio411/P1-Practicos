document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let base = Number(document.querySelector("#base").value)
    let potencia = Number(document.querySelector("#potencia").value)

    document.querySelector("#base").value = ''
    document.querySelector("#potencia").value = ''

    let result = calcularPotencia(base, potencia)
    
    document.querySelector('#result').innerHTML = result
}

function calcularPotencia(base, potencia) {
    let result = 1
    for (let i = 0; i < potencia; i++) {
        result *= base
    }
    return result
}