document.querySelector('#btn').addEventListener('click', procesarDatos)
let palabras = []

function procesarDatos() {
    let palabra = document.querySelector('#palabra').value
    document.querySelector('#palabra').value = ''

    palabras.push(palabra)
}

document.querySelector('#btnMostrar').addEventListener('click', mostrarDatos)
function mostrarDatos() {
    let mensaje = ''
    for (let i = 0; i < palabras.length; i++) {
        const pal = palabras[i];
        mensaje += `${pal}<br>`
    }

    document.querySelector('#result').innerHTML = mensaje
}