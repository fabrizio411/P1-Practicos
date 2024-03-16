function displayResult() {
    const val = parseInt(document.querySelector('#val').value)

    if (!val) {
        return
    }

    let result = 'NO CUMPLE'
    if (val < -20 || val > 20) {
        result = 'CUMPLE'
    }

    document.querySelector('#result').innerHTML = result
}