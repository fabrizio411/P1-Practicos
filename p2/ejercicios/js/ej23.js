let perdieron = 0
let salvaron = 0
let buenaNota = 0
let max = Number.NEGATIVE_INFINITY
let min = Number.POSITIVE_INFINITY
let promedio
let acumuladoNota = 0

document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let nota = Number(document.querySelector('#nota').value)

    document.querySelector('#nota').value = ''


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

    acumuladoNota += nota
    promedio = Math.round(acumuladoNota / (salvaron + perdieron))

    let result = `
    <p class="result">Perdieron => ${perdieron}</p>
    <p class="result">Salvaron => ${salvaron}</p>
    <p class="result">Muy buena nota => ${buenaNota}</p>
    <p class="result">Promedio => ${promedio}</p>
    <p class="result">Nota máxima => ${max}</p>
    <p class="result">Nota mínima => ${min}</p>
    `

    document.querySelector('#result').innerHTML = result
}