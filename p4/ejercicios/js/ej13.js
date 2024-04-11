document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let ancho = Number(document.querySelector('#ancho').value)
    let alto = Number(document.querySelector('#alto').value)

    document.querySelector('#ancho').value = ''
    document.querySelector('#alto').value = ''

    if (!ancho || !alto) {
        return
    }

    let result = ''

    for (let i = 0; i < alto; i++) {
        let row = ''
        for (let j = 0; j < ancho; j++) {
            row += '0'
        }
        result += `<p>${row}</p>`
    }

    document.querySelector('#result').innerHTML = result
}