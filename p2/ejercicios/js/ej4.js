function displayResult() {
    const val = parseInt(document.querySelector('#val').value)

    if (!val) {
        return
    }

    let result = val
    if (val < 0) {
        result = val * -1
    }

    document.querySelector('#result').innerHTML = result
}