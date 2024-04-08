document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let day = document.querySelector('#day').value
    let temp = Number(document.querySelector('#temp').value)

    document.querySelector('#day').value = ''
    document.querySelector('#temp').value = ''

    let clothesChoice = 'Abrigo moderado'
    if (temp < 10) {
        clothesChoice = 'Abrigarse mucho'
    } else if (temp > 20) {
        clothesChoice = 'Ponerse ropa cómoda'
    }

    let isWorkDay = 'Ir al trabajo'
    if (day === 'do') {
        isWorkDay = 'Quedarse en casa, hoy no trabaja'
    }

    let result = `
    <p>Levantarse</p>
    <p>${clothesChoice}</p>
    <p>${isWorkDay}</p>
    `

    document.querySelector('#result').innerHTML = result
}