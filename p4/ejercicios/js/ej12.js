document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let val = Number(document.querySelector('#val').value)

    document.querySelector('#val').value = ''

    let result = 1

    for (let i = val; i > 0; i--) {
        result *= i
    }

    document.querySelector('#result').innerHTML = result
}