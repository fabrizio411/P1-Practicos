function displayResult() {
    const val1 = parseInt(document.querySelector('#val1').value)
    const val2 = parseInt(document.querySelector('#val2').value)
    const operacion = document.querySelector('#operacion').value
    

    if (!val1 || !val2 || !operacion) {
        return
    }

    let result = val1
    if (operacion === 's') {
        result += val2
    } else if (operacion === 'r') {
        result -= val2
    } else if (operacion === 'm') {
        result *= val2
    } else if (operacion === 'd') {
        result = (result / val2).toFixed(1)
    }

    document.querySelector('#result').innerHTML = result
}