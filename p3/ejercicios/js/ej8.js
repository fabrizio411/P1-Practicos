document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let val = Number(document.querySelector('#val').value)

    document.querySelector('#val').value = ''

    if (!val) {
        return
    }

    let result = 'Entre 10 y 30'
    if (val > 30) {
        result = 'Mayor que 30'
    } else if (val < 10) {
        result = 'Menor a 10'
    }

    document.querySelector('#result').innerHTML = result
}