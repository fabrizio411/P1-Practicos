document.querySelector('#btn').addEventListener('click', procesarDatos)
let valores = []

function procesarDatos() {
    let val = Number(document.querySelector('#val').value)
    document.querySelector('#val').value = ''

    valores.push(val)
}

document.querySelector('#btnMostrar').addEventListener('click', mostrarDatos)
function mostrarDatos() {
    let mayor = Number.NEGATIVE_INFINITY
    for (let i = 0; i < valores.length; i++) {
        const val = valores[i];
        if (val > mayor) mayor = val
    }

    document.querySelector('#result').innerHTML = mayor
}