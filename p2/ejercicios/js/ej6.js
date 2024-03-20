document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let val = Number(document.querySelector('#val').value)
    
    document.querySelector('#val').value = ''

    if (!val) {
        return
    }

    let result = 'No'
    if (val % 3 === 0 && val % 7 === 0) {
        result = 'Si'
    }

    document.querySelector('#result').innerHTML = result
}