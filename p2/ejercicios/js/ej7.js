document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let val = Number(document.querySelector('#val').value)

    document.querySelector('#val').value = ''

    let result = 'NO CUMPLE'
    if (val < -20 || val > 20) {
        result = 'CUMPLE'
    }

    document.querySelector('#result').innerHTML = result
}