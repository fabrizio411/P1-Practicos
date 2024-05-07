document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let texto = document.querySelector('#text').value.toLowerCase()

    let newTexto = ''
    let reversedTexto = ''

    for (let i = 0; i < texto.length;  i++) {
        if (texto[i] !== ' ' && texto[i] !== ',' && texto[i] !== '.') {
            if (texto[i] === 'á') {
                newTexto += 'a'
            } else if (texto[i] === 'é') {
                newTexto += 'e'
            } else if (texto[i] === 'í') {
                newTexto += 'i'
            } else if (texto[i] === 'ó') {
                newTexto += 'o'
            } else if (texto[i] === 'ú') {
                newTexto += 'u'
            } else {
                newTexto += texto[i]
            }
        }
    }

    for (let i = newTexto.length - 1; i >= 0; i--) {
        reversedTexto += newTexto[i]
    }


    let result = 'NO es Palindomo'
    if (newTexto === reversedTexto) {
        result = 'Es Palindomo'
    }
    
    document.querySelector('#result').innerHTML = result
}