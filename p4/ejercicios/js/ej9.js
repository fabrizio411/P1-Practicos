document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let password = document.querySelector('#text').value

    let message
    let passwordOk = true
    let tieneMayusculas = false
    let tieneMinusculas = false
    let tieneNumero = false
    let tieneEspacios = false
    let tieneCharEspeciales = false

    if (password.length < 5) {
        message = 'Minimo 5 caracteres'
        passwordOk = false
    } else if ('0123456789'.includes(password[0])) {
        message = 'No puede empezar por número'
        passwordOk = false
    }

    if (passwordOk) {
        for (let i = 0; i < password.length; i++) {
            if (password.charCodeAt(i) <= 90 && password.charCodeAt(i) >= 65) {
                tieneMayusculas = true
            } else if (password.charCodeAt(i) <= 122 && password.charCodeAt(i) >= 97) {
                tieneMinusculas = true
            }
    
            if (password[i] === ' ') {
                tieneEspacios = true
            }
    
            if ('.@#!'.includes(password[i])) {
                tieneCharEspeciales = true
            }
    
            if ('0123456789'.includes(password[i])) {
                tieneNumero = true
            }
        }

        if (!tieneMayusculas) {
            message = 'Debe incluir una mayúscula'
            passwordOk = false
        } else if (!tieneMinusculas) {
            message = 'Debe incluir una minúscula'
            passwordOk = false
        } else if (!tieneNumero) {
            message = 'Debe incluir un número'
            passwordOk = false
        } else if (tieneEspacios) {
            message = 'No puede contener espacios'
            passwordOk = false
        } else if (!tieneCharEspeciales) {
            message = 'Incluir minimo uno de estos: . @ # !'
            passwordOk = false
        }
    }

    if (passwordOk) {
        document.querySelector('#msg').innerHTML = 'Cumple las condiciones'
        document.querySelector('#result').innerHTML = password
    } else {
        document.querySelector('#msg').innerHTML = message
    }

}