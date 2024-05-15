document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let val1 = Number(document.querySelector("#val1").value)
    let val2 = Number(document.querySelector("#val2").value)

    document.querySelector("#val1").value = ''
    document.querySelector("#val2").value = ''

    let cantidadPares = numerosPares(val1, val2)
    
    document.querySelector('#result').innerHTML = cantidadPares
}

function numerosPares(val1, val2) {
    let cant = 0

    if (val1 > val2) {
        let aux = val2
        val2 = val1
        val1 = aux
    }

    for (let i = val1; i <= val2; i++) {
        if (i % 2 === 0) {
            cant++
        }
    }

    return cant
}