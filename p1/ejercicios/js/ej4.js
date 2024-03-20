document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let val1 = Number(document.querySelector('#val1').value)
    let val2 = Number(document.querySelector('#val2').value)

    document.querySelector('#val1').value = ''
    document.querySelector('#val2').value = ''

    let result1 = val1 + val2 
    let result2 = val1 * val2

    document.querySelector('#result1').innerHTML = result1
    document.querySelector('#result2').innerHTML = result2
}