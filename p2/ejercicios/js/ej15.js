let count = 0

function acumular() {
    const val = parseInt(document.querySelector('#val').value)

    if (!val) {
        return
    }

    count += val
}

function displayResult() {
    document.querySelector('#result').innerHTML = count
}