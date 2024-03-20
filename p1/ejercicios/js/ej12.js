document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let weight = Number(document.querySelector('#weight').value)
    let height = Number(document.querySelector('#height').value)

    document.querySelector('#weight').value = ''
    document.querySelector('#height').value = ''

    let result = weight / (height ** 2)

    document.querySelector('#result').innerHTML = result
}