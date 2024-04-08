document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let val = Number(document.querySelector('#val').value)

    document.querySelector('#val').value = ''

    let result = 'Es mayor que 20'
    if (val <= 20) {
        result = 'Es menor o igual a 20'
    }

    document.querySelector('#result').innerHTML = result
}