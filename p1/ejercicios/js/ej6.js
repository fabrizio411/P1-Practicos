document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let importe = Number(document.querySelector('#importe').value)
    let cambio = Number(document.querySelector('#cambio').value)

    document.querySelector('#importe').value = ''
    document.querySelector('#cambio').value = ''

    let result = importe / cambio

    document.querySelector('#result').innerHTML = result
}