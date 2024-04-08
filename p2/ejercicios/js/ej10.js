document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let val1 = Number(document.querySelector('#val1').value)
    let val2 = Number(document.querySelector('#val2').value)

    document.querySelector('#val1').value = ''
    document.querySelector('#val2').value = ''

    let result = val1 - val2
    if (val1 < val2) {
        result = val2 - val2
    }

    document.querySelector('#result').innerHTML = result
}