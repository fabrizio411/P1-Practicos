let azucar = 1
let harina = 100
let aceite = 1
let agua = 1

document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let val1 = Number(document.querySelector("#val1").value)
    let val2 = Number(document.querySelector("#val2").value)

    document.querySelector("#val1").value = ''
    document.querySelector("#val2").value = ''

    let next

    while (val2 > 0) {
        next = val2 
        val2 = val1 % val2
        val1 = next
    }

    document.querySelector('#result').innerHTML = val1
}