function displayResult() {
    const val1 = parseInt(document.querySelector('#val1').value)
    const val2 = parseInt(document.querySelector('#val2').value)

    if (!val1 || !val2) {
        return
    }

    const result = val1 + val2

    document.querySelector('#result').innerHTML = result
}