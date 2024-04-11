document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let val1 = Number(document.querySelector('#val1').value)
    let multiplicador = Number(document.querySelector('#multiplicador').value)

    document.querySelector('#val1').value = ''
    document.querySelector('#multiplicador').value = ''

    let result = 0
    let iterador = multiplicador / Math.abs(multiplicador)

    for (let i = 0; i < multiplicador || i > multiplicador; i += iterador) {
        if (iterador >= 0) {
            result += val1
        } else {
            result -= val1
        }
    }

    document.querySelector('#result').innerHTML = result
}