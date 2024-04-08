document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let val = Number(document.querySelector('#val').value)

    document.querySelector('#val').value = ''

    let result = ''
    if (val > 10) {
        result = 'Mayor que diez'
    }

    document.querySelector('#result').innerHTML = result
}