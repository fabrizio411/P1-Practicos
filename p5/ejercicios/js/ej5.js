let numeros = [1, 1]

function procesarDatos() {
    for (let i = numeros.length; i < 20; i++) {
        let newNumero = numeros[numeros.length - 1] + numeros[numeros.length - 2]
        numeros.push(newNumero)
    }

    for (let i = 0; i < numeros.length; i++) {
        document.querySelector('#result').innerHTML += `${numeros[i]}<br>`
    }
}

procesarDatos()
