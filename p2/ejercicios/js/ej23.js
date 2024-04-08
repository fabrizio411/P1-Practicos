let reprovados = 0
let aprovados = 0
let buenaNota = 0
let max = Number.NEGATIVE_INFINITY
let min = Number.POSITIVE_INFINITY
let promedio
let acumuladoNota = 0

document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let nota = Number(document.querySelector('#nota').value)

    document.querySelector('#nota').value = ''

    acumuladoNota += nota
    promedio = acumuladoNota / (salvaron + perdieron)

    if (nota > max) {
        max = nota
    }
    if (nota < min) {
        min = nota
    }

    if (nota >= 70) {
        salvaron++
        if (nota >= 90) {
            buenaNota++
        }
    } else {
        perdieron++
    }

    let result = `
    <p class="result">Perdieron => ${reprovados}</p>
    <p class="result">Salvaron => ${aprovados}</p>
    <p class="result">Muy buena nota => ${buenaNota}</p>
    <p class="result">Promedio => ${Math.round(totalNotaProm / countProm)}</p>
    <p class="result">Nota máxima => ${max}</p>
    <p class="result">Nota mínima => ${min}</p>
    `

    document.querySelector('#result').innerHTML = result
}