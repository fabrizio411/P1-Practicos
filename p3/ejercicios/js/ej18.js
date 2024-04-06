let count = 0
let total = 0

document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let val = Number(document.querySelector("#val").value)

    document.querySelector("#val").value = ''
    document.querySelector("#val").focus()
    
    if (!val || count >= 6) {
        return
    }

    count++
    if (count >= 6) {
        document.querySelector('#message').innerHTML = 'Ya se ingresaron 6 valores'
        return
    }

    if (val < 0) {
        total += val * -1
    } else {
        total += val
    }


    document.querySelector('#result').innerHTML = total
}