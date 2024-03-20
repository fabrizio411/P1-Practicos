document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let val1 = Number(document.querySelector('#val1').value)
    let val2 = Number(document.querySelector('#val2').value)

    document.querySelector('#val1').value = ''
    document.querySelector('#val2').value = ''

    if (!val1 || !val2) {
        return
    }

    let result = `${val1} NO es múltiplo de ${val2}`
    if (val1 % val2 === 0) {
        result = `${val1} es múltiplo de ${val2}`
    }

    document.querySelector('#result').innerHTML = result
}