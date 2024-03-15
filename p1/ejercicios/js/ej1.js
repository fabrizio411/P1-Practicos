function displayResult() {
    const nombre = document.querySelector('#nombre').value
    const apellido = document.querySelector('#apellido').value

    const result = `${(apellido)}, ${(nombre)}`

    document.querySelector('#result').innerHTML = result
}