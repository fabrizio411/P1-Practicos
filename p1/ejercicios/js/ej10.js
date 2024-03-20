document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let importe = Number(document.querySelector('#importe').value)
    let recargo = Number(document.querySelector('#recargo').value)

    document.querySelector('#importe').value = ''
    document.querySelector('#recargo').value = ''

    let result = importe + (recargo * importe / 100)

    document.querySelector('#result').innerHTML = result
}