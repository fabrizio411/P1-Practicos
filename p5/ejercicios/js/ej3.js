document.querySelector('#btn').addEventListener('click', procesarDatos)
let valores = []

function procesarDatos() {
    let val = Number(document.querySelector('#val').value)
    document.querySelector('#val').value = ''

    valores.push(val)
}

document.querySelector('#btnMostrar').addEventListener('click', mostrarDatos)
function mostrarDatos() {
    let total = 0
    for (let i = 0; i < valores.length; i++) {
        const val = valores[i];
        total += val
    }

    let promedio = total / valores.length

    document.querySelector('#result').innerHTML = promedio
}
