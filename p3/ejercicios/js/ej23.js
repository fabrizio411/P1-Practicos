let reprovados = 0
let aprovados = 0
let buenaNota = 0
let notaMaxima = 0
let notaMinima = 101

let totalNotaProm = 0
let countProm = 0

document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let nota = Number(document.querySelector('#nota').value)

    document.querySelector('#nota').value = ''

    if (!nota) {
        return
    }

    if (nota < 70) {
        reprovados++
    } else if (nota > 90) {
        aprovados++
        buenaNota++
    } else {
        aprovados++
    }

    if (nota < notaMinima) {
        notaMinima = nota
    }

    if (nota > notaMaxima) {
        notaMaxima = nota
    }

    totalNotaProm += nota
    countProm++

    let result = `
    <p class="result">Perdieron => ${reprovados}</p>
    <p class="result">Salvaron => ${aprovados}</p>
    <p class="result">Muy buena nota => ${buenaNota}</p>
    <p class="result">Promedio => ${Math.round(totalNotaProm / countProm)}</p>
    <p class="result">Nota máxima => ${notaMaxima}</p>
    <p class="result">Nota mínima => ${notaMinima}</p>
    `

    document.querySelector('#result').innerHTML = result
}