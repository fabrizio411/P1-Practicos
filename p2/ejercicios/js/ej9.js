function displayResult() {
    const day = document.querySelector('#day').value
    const temp = parseInt(document.querySelector('#temp').value)

    console.log(day)

    if (!day || !temp) {
        return
    }

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