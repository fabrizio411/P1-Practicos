document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let matricula = document.querySelector('#text').value.toLowerCase()

    for (let i = 0; i < matricula.length; i++) {
        charCode = matricula.charCodeAt(i)
        if (!((charCode <= 122 && charCode >= 97) || (charCode <= 57 && charCode >= 48))) {
            matricula = matricula.substring(0, i) + matricula.substring(i + 1)
        }
    }

    let result = 'Invalida'

    if (matricula.length === 7) {
        if (
            !isNaN(Number(matricula.substring(1))) 
            && (matricula.charCodeAt(0) <= 122 && matricula.charCodeAt(0) >= 97)
        ) {
            result = 'Valida'
        } else if (
            !isNaN(Number(matricula.substring(3)))
            && (matricula.charCodeAt(0) <= 122 && matricula.charCodeAt(0) >= 97)
            && (matricula.charCodeAt(1) <= 122 && matricula.charCodeAt(1) >= 97)
            && (matricula.charCodeAt(2) <= 122 && matricula.charCodeAt(2) >= 97)
        ) {
            console.log(matricula.charCodeAt(2) <= 122 && matricula.charCodeAt(3) >= 97)
            result = 'Valida'
        }
    }

    document.querySelector('#result').innerHTML = result
}