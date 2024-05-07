document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let texto = document.querySelector('#text').value

    let suma = 0

    for (let i = 0; i < texto.length; i++) {
        if ( !isNaN(Number(texto[i])) ) {
            suma += Number(texto[i])
        }
    }

    document.querySelector('#result').innerHTML = suma
}