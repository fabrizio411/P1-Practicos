document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let val = Number(document.querySelector('#val').value)

    document.querySelector('#val').value = ''

    if (!val || val < 2 || val > 50) {
        return
    }

    let result = ''
    for (let i = 1; i <= val; i++) {
        result += '-'
    }

    document.querySelector('#result').innerHTML = result
}