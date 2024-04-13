document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let text = document.querySelector('#text').value

    document.querySelector('#text').value = ''

    let newText = text.toLowerCase()

    newText = newText[0].toUpperCase() + newText.substring(1)

    document.querySelector('#result').innerHTML = newText
}