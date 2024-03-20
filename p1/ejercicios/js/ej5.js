document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let val = Number(document.querySelector('#val').value)

    document.querySelector('#val').value = ''

    let result = val ** 2

    document.querySelector('#result').innerHTML = result
    document.querySelector('#square').style.height = `${val}px`
    document.querySelector('#square').style.width = `${val}px`
}