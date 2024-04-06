document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let ingresos = Number(document.querySelector('#ingresos').value)
    let costoInmueble = Number(document.querySelector('#costoInmueble').value)

    document.querySelector('#ingresos').value = ''

    if (!ingresos) {
        return
    }

    let primerPago
    let cuotas

    if (ingresos < 20000) {
        primerPago = 15 * costoInmueble / 100
        cuotas = (costoInmueble - primerPago) / (7 * 12)
    } else {
        primerPago = 30 * costoInmueble / 100
        cuotas = (costoInmueble - primerPago) / 12
    }

    let result = `
    Primer pago => $${primerPago} <br>
    Valor Cuotas => $${Math.round(cuotas)}
    `

    document.querySelector('#result').innerHTML = result
}