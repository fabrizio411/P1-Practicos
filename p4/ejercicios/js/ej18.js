document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let year = Number(document.querySelector("#year").value)

    document.querySelector("#year").value = ''

    let result = 'No es bisiesto'
    if (anioBisiesto(year)) {
        result = 'Es bisiesto'
    }
    
    document.querySelector('#result').innerHTML = result
}

function anioBisiesto(year) {
    let esBisiesto = false

    if (year % 4 === 0) {
        if (year % 100 !== 0 && year % 400 !== 0) {
            esBisiesto = true
        }
    }
    return esBisiesto
}