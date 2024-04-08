document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let montoTotal = Number(document.querySelector('#montoTotal').value)
    let targeta = document.querySelector('#targeta').value

    document.querySelector('#montoTotal').value = ''
    document.querySelector('#targeta').value = ''

    let result = montoTotal

    if (targeta === 's' && montoTotal < 10000) {
        result = Math.round(montoTotal - (4 * montoTotal / 100))
    }

    document.querySelector('#result').innerHTML = `$${result}`
}