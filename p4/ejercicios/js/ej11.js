document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let texto = document.querySelector('#text').value

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i].toLowerCase()

        if (char === 'a') {
            texto = texto.substring(0, i) + '4' + texto.substring(i + 1)
        } else if (char === 'e') {
            texto = texto.substring(0, i) + '3' + texto.substring(i + 1)
        } else if (char === 'i') {
            texto = texto.substring(0, i) + '1' + texto.substring(i + 1)
        } else if (char === 'o') {
            texto = texto.substring(0, i) + '0' + texto.substring(i + 1)
        } else if (char === 'u') {
            texto = texto.substring(0, i) + '8' + texto.substring(i + 1)
        }
    }

    document.querySelector('#result').innerHTML = texto
}