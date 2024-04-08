document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let val1 = Number(document.querySelector("#val1").value)
    let val2 = Number(document.querySelector("#val2").value)

    document.querySelector("#val1").value = ''
    document.querySelector("#val2").value = ''

    let result = 0
    let i = val1

    if (val1 < val2) {
        while (i <= val2 && result === 0) {
            if (i % 4 === 0 && i % 6 === 0) {
                result = i
            }
            i++
        }
    } else {
        while (i >= val2 && result === 0) {
            if (i % 4 === 0 && i % 6 === 0) {
                result = i
            }
            i--
        }
    }

    document.querySelector('#result').innerHTML = result
}