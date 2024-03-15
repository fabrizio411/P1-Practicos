const IVA = 22

function displayResult() {
    const importe = parseInt(document.querySelector('#importe').value)

    if (!importe) {
        return
    }

    const result = importe + (IVA * importe / 100)

    document.querySelector('#result').innerHTML = result
}