function displayResult() {
    const val = parseInt(document.querySelector('#val').value)

    if (!val) {
        return
    }

    let result = 'No'
    if (val > 10 && val < 20) {
        result = 'Si'
    }

    document.querySelector('#result').innerHTML = result
}