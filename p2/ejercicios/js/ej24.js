let count = 0
let minSueldo = 0
let total = 0

document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let sueldo = Number(document.querySelector('#sueldo').value)

    document.querySelector('#sueldo').value = ''

    if (sueldo < minSueldo || minSueldo === 0) {
        minSueldo = sueldo
    }

    total += sueldo
    count++

    let result = `
    <p class="result">Total a pagar => $${total}</p>
    <p class="result">Empleados que cobran => ${count}</p>
    <p class="result">Sueldo más bajo => $${minSueldo}</p>
    `

    document.querySelector('#result').innerHTML = result
}