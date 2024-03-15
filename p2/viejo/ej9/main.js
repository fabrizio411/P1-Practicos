const resultDisplay = document.querySelector("#result")

function displayResult () {
    const day = document.querySelector("#day").value
    const temp = document.querySelector("#temp").value

    if (!day || !temp) {
        return
    }

    const dayResult = day.toLowerCase() != "domingo" ? "Ir al trabajo" : "Quedarse en casa, hoy no trabaja"
    const tempResult = temp < 10 ? "Abrigarse mucho" : temp > 20 ? "Ponerse ropa cómoda" : "Abrigo moderado"

    let result = `
    <p>Levantarse</p>
    <p>${tempResult}</p>
    <p>${dayResult}</p>
    `
    
    resultDisplay.innerHTML = result
}