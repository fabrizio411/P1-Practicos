let IVA = 22

document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let importe = Number(document.querySelector('#importe').value)

    document.querySelector('#importe').value = ''

    let result = importe + (IVA * importe / 100)

    document.querySelector('#result').innerHTML = result
}