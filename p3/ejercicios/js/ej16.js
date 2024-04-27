document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let val1 = Number(document.querySelector("#val1").value)
    let val2 = Number(document.querySelector("#val2").value)

    document.querySelector("#val1").value = ''
    document.querySelector("#val2").value = ''

    let result = null
    let i = val1

    if (val2 < val1) {
        let aux = val2
        val2 = val1
        val1 = aux
    }

    while (i <= val2 && result === null) {
        if (i % 4 === 0 && i % 6 === 0) {
            result = i
        }
        i++
    }

    document.querySelector('#result').innerHTML = result
}