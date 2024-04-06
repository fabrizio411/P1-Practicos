document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let val = Number(document.querySelector('#val').value)

    document.querySelector('#val').value = ''

    if (!val) {
        return
    }

    let result = val
    if (val < 0) {
        result = val * -1
    }

    document.querySelector('#result').innerHTML = result
}