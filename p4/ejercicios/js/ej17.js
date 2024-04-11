document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let val = Number(document.querySelector("#val").value)
    let divisor = Number(document.querySelector("#divisor").value)

    document.querySelector("#val").value = ''
    document.querySelector("#divisor").value = ''

    let resto
    let result = 0

    for (let i = Math.abs(val); i >= Math.abs(divisor); i -= Math.abs(divisor)) {
        result++
    }

    if ((val < 0 && divisor >= 0) || (divisor < 0 && val >= 0)) {
        result *= -1
    }

    resto = val - (result * divisor)

    document.querySelector('#result').innerHTML = `${result}<br>${resto}`
    
}