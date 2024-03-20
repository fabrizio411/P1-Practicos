let count = 0

document.querySelector('#btnAcc').addEventListener('click', acumular)
document.querySelector('#btnResult').addEventListener('click', displayResult)

function acumular() {
    const val = Number(document.querySelector('#val').value)

    document.querySelector('#val').value = ''

    count += val
}

function displayResult() {
    document.querySelector('#result').innerHTML = count
}