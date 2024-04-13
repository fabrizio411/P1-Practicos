const vocales = 'aeiou'

document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let texto = document.querySelector('#texto').value

    document.querySelector('#texto').value = ''

    let result = 0

    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            result++
        }
    }

    document.querySelector('#result').innerHTML = result
}