document.querySelector('#btn').addEventListener('click', ingresarTexto)
let textos = []

function ingresarTexto() {
    let texto = document.querySelector('#texto').value
    document.querySelector('#texto').value = ''

    textos.push(texto)

    listarArray()
}

document.querySelector('#btnMostrar').addEventListener('click', eliminarTexto)
function eliminarTexto() {
    let texto = document.querySelector('#texto').value
    document.querySelector('#texto').value = ''

    let eliminado = false
    let mensaje = ''

    for (let i = 0; i < textos.length; i++) {
        const txt = textos[i]
        if (txt === texto) {
            textos.splice(i, 1)
            eliminado = true
            break
        }
    }

    if (eliminado) {
        mensaje = 'Se elimino correctamete'
    } else {
        mensaje = 'No se encontro el texto'
    }

    document.querySelector('#mensaje').innerHTML = mensaje

    listarArray()
}

function listarArray() {
    let mensaje = ''
    for (let i = 0; i < textos.length; i++) {
        const txt = textos[i];
        mensaje += `${txt}<br>`
    }

    document.querySelector('#result').innerHTML = mensaje
}