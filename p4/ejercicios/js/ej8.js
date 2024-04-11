document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let val1 = Number(document.querySelector('#val1').value)
    let val2 = Number(document.querySelector('#val2').value)

    document.querySelector('#val1').value = ''
    document.querySelector('#val2').value = ''

    let result = ''

    if (val1 < val2) {
        for (let i = val1; i <= val2; i++) {
            result += i + ' '
        }
    } else if (val2 < val1) {
        for (let i = val1; i >= val2; i--) {
            result += i + ' '
        }

    } else {
        result = 'Números Iguales'
    }
    
    document.querySelector('#result').innerHTML = result
}