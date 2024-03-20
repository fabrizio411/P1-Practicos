document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let nombre = document.querySelector('#nombre').value
    let apellido = document.querySelector('#apellido').value

    document.querySelector('#nombre').value = ''
    document.querySelector('#apellido').value = ''

    let result = `${(apellido)}, ${(nombre)}`

    document.querySelector('#result').innerHTML = result
}