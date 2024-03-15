function displayResult() {
    const val = parseInt(document.querySelector('#val').value)

    if (!val) {
        return
    }

    let result = 'Es mayor que 20'
    if (val <= 20) {
        result = 'Es menor o igual a 20'
    }

    document.querySelector('#result').innerHTML = result
}