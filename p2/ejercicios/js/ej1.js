function displayResult() {
    const val = parseInt(document.querySelector('#val').value)

    if (!val) {
        return
    }

    let result = 'Positivo'
    if (val < 0) {
        result = 'Negativo'
    }

    document.querySelector('#result').innerHTML = result
}