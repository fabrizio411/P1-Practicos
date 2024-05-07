document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let texto = document.querySelector('#text').value

    let mayusuclas = 0
    let minusculas = 0

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== ' ') {
            charCode = texto.charCodeAt(i)
            if (charCode <= 90 && charCode >= 65) {
                mayusuclas++
            } else {
                minusculas++
            }
        }
    }
    
    
    document.querySelector('#mayRes').innerHTML = mayusuclas
    document.querySelector('#minRes').innerHTML = minusculas
}