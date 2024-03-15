function displayResult() {
    const val1 = parseInt(document.querySelector('#val1').value)
    const val2 = parseInt(document.querySelector('#val2').value)

    if (!val1 || !val2) {
        return
    }

    const result1 = val1 + val2 
    const result2 = val1 * val2

    document.querySelector('#result1').innerHTML = result1
    document.querySelector('#result2').innerHTML = result2
}