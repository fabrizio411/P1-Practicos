document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let val1 = Number(document.querySelector('#val1').value)
    let val2 = Number(document.querySelector('#val2').value)
    let multiplo = Number(document.querySelector('#multiplo').value)

    document.querySelector('#val1').value = ''
    document.querySelector('#val2').value = ''
    document.querySelector('#multiplo').value = ''

    let result = ''

    if (val1 < val2) {
        for (let i = val1; i <= val2; i++) {
            if (i % multiplo === 0) {
                result += i + ' '
            }
        }
    } else {
        console.log(val2, val1, multiplo)
        for (let i = val1; i >= val2; i--) {
            if (i % multiplo === 0) {
                result += i + ' '
            }
        }
    }

    document.querySelector('#result').innerHTML = result
}