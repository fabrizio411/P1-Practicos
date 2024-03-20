document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let wins = Number(document.querySelector('#wins').value)
    let ties = Number(document.querySelector('#ties').value)

    document.querySelector('#wins').value = ''
    document.querySelector('#ties').value = ''

    let result = wins * 3 + ties

    document.querySelector('#result').innerHTML = result
}