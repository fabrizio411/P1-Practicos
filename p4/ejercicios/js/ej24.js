document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let sueldo = Number(document.querySelector("#sueldo").value)
    let tieneHijos = document.querySelector("#tieneHijos").value

    document.querySelector("#sueldo").value = ''
    document.querySelector("#tieneHijos").value = ''

    let result = calcularSueldoLiquido(sueldo, tieneHijos)
    
    document.querySelector('#result').innerHTML = `$${result}`
}

function calcularSueldoLiquido(sueldo, tieneHijos) {
    let resultado = sueldo
    resultado -= sueldo * 0.15
    resultado -= sueldo * 0.001

    if (tieneHijos === 'si') {
        resultado -= sueldo * 0.06
    } else {
        resultado -= sueldo * 0.045
    }

    return Math.round(resultado)
}