function displayResult() {
    const importe = parseInt(document.querySelector('#importe').value)
    const cambio = parseFloat(document.querySelector('#cambio').value)

    if (!importe || !cambio) {
        return
    }

    const result = (importe / cambio).toFixed(2)

    document.querySelector('#result').innerHTML = result
}