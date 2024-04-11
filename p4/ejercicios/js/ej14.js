document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let val = Number(document.querySelector('#val').value)

    document.querySelector('#val').value = ''

    let i = val
    let result = 0

    while (i >= 1) {
        result++
        i /= 10
    }
    
    document.querySelector('#result').innerHTML = result
}