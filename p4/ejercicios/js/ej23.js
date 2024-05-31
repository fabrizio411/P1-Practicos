document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let texto = document.querySelector("#texto").value

    document.querySelector("#texto").value = ''

    let result = invertirTexto(texto)
    
    document.querySelector('#result').innerHTML = result
}

function invertirTexto(texto) {
    let newTexto = ''
    for (let i = texto.length - 1; i >= 0; i--) {
        newTexto += texto[i]
    }
    return newTexto
}