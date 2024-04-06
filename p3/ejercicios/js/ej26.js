document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let noches = Number(document.querySelector('#noches').value)
    let metodoPago = document.querySelector('#metodoPago').value

    document.querySelector('#noches').value = ''
    document.querySelector('#metodoPago').value = ''

    if (!noches || !metodoPago) {
        return
    }

    let montoTotal
    montoTotal = noches * 40
    
    let nochesRegalo = 0
    if (noches >= 7 && metodoPago === 't') {
        nochesRegalo = 3
    } else if (noches >= 7) {
        nochesRegalo = 2
    } else if (noches >= 3) {
        nochesRegalo = 1
    }



    let result = `
    <p class="result">Noches de regalo => ${nochesRegalo}</p>
    <p class="result">Hospedaje => ${noches + nochesRegalo} noches</p>
    <p class="result">Monto a pagar => ${montoTotal}</p>
    `

    document.querySelector('#result').innerHTML = result
}