let count = 0

function acumular() {
    const val = document.querySelector('#val')

    if (!val.value) {
        return
    }

    count += parseInt(val.value)

    val.value = ''
}

function displayResult() {
    document.querySelector('#result').innerHTML = count
}