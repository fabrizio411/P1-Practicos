document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let val1 = Number(document.querySelector('#val1').value)
    let val2 = Number(document.querySelector('#val2').value)
    let operacion = document.querySelector('#operacion').value

    document.querySelector('#val1').value = ''
    document.querySelector('#val2').value = ''
    document.querySelector('#operacion').value = ''
    
    let result = val1
    if (operacion === 's') {
        result += val2
    } else if (operacion === 'r') {
        result -= val2
    } else if (operacion === 'm') {
        result *= val2
    } else if (operacion === 'd') {
        // Redondear
        result = result / val2
    }

    document.querySelector('#result').innerHTML = result
}