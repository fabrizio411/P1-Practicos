document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let texto = document.querySelector('#texto').value

    document.querySelector('#texto').value = ''

    let result = 'NO empieza y termina con la misma letra'

    console.log(texto[texto.length - 1])

    if (texto[0] === texto[texto.length - 1]) {
        result = 'Empieza y termina con la misma letra'
    }

    document.querySelector('#result').innerHTML = result
}