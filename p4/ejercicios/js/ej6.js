const vocales = 'aeiou'

document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let text = document.querySelector('#text').value

    document.querySelector('#text').value = ''

    let cantidadVocales = 0

    for (let i = 0; i < text.length; i++) {
        if (vocales.includes(text[i])) {
            cantidadVocales++
        }
    }

    let result = cantidadVocales
    if (text.length < 10) {
        result = text.length - cantidadVocales
    }
    

    document.querySelector('#result').innerHTML = result
}