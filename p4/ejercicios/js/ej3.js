document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let texto = document.querySelector('#texto').value

    document.querySelector('#texto').value = ''

    document.querySelector('#result').innerHTML = texto.toUpperCase()
}