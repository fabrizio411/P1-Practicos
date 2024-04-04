let maxPuntos = 30
let puntosE1
let puntosE2

document.querySelector('#btn').addEventListener('click', displayResult)
document.querySelector('#start-btn').addEventListener('click', start)

function start() {
    puntosE1 = 0
    puntosE2 = 0

    document.querySelector('#equipo2').disabled = false
    document.querySelector('#equipo1').disabled = false
    document.querySelector('#start-btn').style.display = 'none'
    document.querySelector('#btn').style.display = 'block'

    document.querySelector('#resE1').innerHTML = puntosE1
    document.querySelector('#resE2').innerHTML = puntosE2

    document.querySelector('#mensaje').innerHTML = ''
}

start()

function displayResult() {
    let equipo1pts = Number(document.querySelector('#equipo1').value)
    let equipo2pts = Number(document.querySelector('#equipo2').value)

    document.querySelector('#equipo1').value = ''
    document.querySelector('#equipo2').value = ''

    puntosE1 += equipo1pts
    puntosE2 += equipo2pts

    function disableInputs() {
        document.querySelector('#equipo2').disabled = true
        document.querySelector('#equipo1').disabled = true
        document.querySelector('#btn').style.display = 'none'
        document.querySelector('#start-btn').style.display = 'block'
    }

    if (puntosE1 >= maxPuntos && puntosE2 >= maxPuntos) {
        disableInputs()
        if (puntosE1 === puntosE2) {
            document.querySelector('#mensaje').innerHTML = 'Empate'
        } else if (puntosE1 > puntosE2) {
            document.querySelector('#mensaje').innerHTML = 'Ganador: Equipo 1'
        } else {
            document.querySelector('#mensaje').innerHTML = 'Ganador: Equipo 2'
        }
    } else if (puntosE1 >= maxPuntos) {
        disableInputs()
        document.querySelector('#mensaje').innerHTML = 'Ganador: Equipo 1'
    } else if (puntosE2 >= maxPuntos) {
        disableInputs()
        document.querySelector('#mensaje').innerHTML = 'Ganador: Equipo 2'
    }

    document.querySelector('#resE1').innerHTML = puntosE1
    document.querySelector('#resE2').innerHTML = puntosE2
}