function displayResult() {
    const val = parseInt(document.querySelector('#val').value)

    if (!val) {
        return
    }

    let result = ''
    if (val > 10) {
        result = 'Mayor que diez'
    }

    document.querySelector('#result').innerHTML = result
}