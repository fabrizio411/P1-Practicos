function displayResult() {
    const val1 = parseInt(document.querySelector('#val1').value)
    const val2 = parseInt(document.querySelector('#val2').value)

    if (!val1 || !val2) {
        return
    }

    let result = `${val1} NO es múltiplo de ${val2}`
    if (val1 % val2 === 0) {
        result = `${val1} es múltiplo de ${val2}`
    }

    document.querySelector('#result').innerHTML = result
}