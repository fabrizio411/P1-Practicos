document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let val = Number(document.querySelector('#val').value)

    document.querySelector('#val').value = ''
    document.querySelector('#mensaje').innerHTML = ''

    if (val < 2000) {
        document.querySelector('#mensaje').innerHTML = 'Ingresar un N° mayor a 2000'
        return
    }

    let i = val
    while (i >= 100) {
        i /= 20
    }
    
    document.querySelector('#result').innerHTML = i
}