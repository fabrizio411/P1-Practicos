document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let val = Number(document.querySelector('#val').value)
    
    document.querySelector('#val').value = ''

    let result = 'Positivo'
    if (val < 0) {
        result = 'Negativo'
    }

    document.querySelector('#result').innerHTML = result
}