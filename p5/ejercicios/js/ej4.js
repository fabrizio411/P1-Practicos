document.querySelector('#btn').addEventListener('click', procesarDatos)
let nombres = []

function procesarDatos() {
    let nombre = document.querySelector('#nombre').value

    let nombreExiste = false
    let mensaje
    for (let i = 0; i < nombres.length; i++) {
        const nom = nombres[i]
        if (nom === nombre) {
            nombreExiste = true
            mensaje = 'El nomrbre ya existe'
        }
    }

    if (!nombreExiste) {
        nombres.push(nombre)
        document.querySelector('#nombre').value = ''
    } else {
        document.querySelector('#mensaje').innerHTML = mensaje
    }
}

document.querySelector('#btnMostrar').addEventListener('click', mostrarDatos)
function mostrarDatos() {
    let mensaje = ''
    for (let i = 0; i < nombres.length; i++) {
        const nombre = nombres[i];
        mensaje += `${nombre}<br>`
    }

    document.querySelector('#result').innerHTML = mensaje
}