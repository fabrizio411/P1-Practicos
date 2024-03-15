function displayResult() {
    const importe = parseInt(document.querySelector('#importe').value)
    const recargo = parseInt(document.querySelector('#recargo').value)

    if (!importe || !recargo) {
        return
    }

    const result = importe + (recargo * importe / 100)

    document.querySelector('#result').innerHTML = result
}