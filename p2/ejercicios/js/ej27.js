const messageDOM = document.querySelector('#message')

let numJ1
let tries

function start() {
    numJ1 = 0
    tries = 0

    document.querySelector('#result').innerHTML = ''

    document.querySelector('#numJ1-input').style.display = 'flex'
    document.querySelector('#numJ1-btn').style.display = 'block'
    document.querySelector('#cpu-btn').style.display = 'block'

    document.querySelector('#guess-input').style.display = 'none'
    document.querySelector('#guess-btn').style.display = 'none'
    document.querySelector('#guess').disabled = false
}

start()

document.querySelector('#numJ1-btn').addEventListener('click', getNumJ1)
document.querySelector('#cpu-btn').addEventListener('click', getCpuNum)
document.querySelector('#guess-btn').addEventListener('click', displayResult)

function getNumJ1() {
    numJ1 = Number(document.querySelector('#numJ1').value)
    document.querySelector('#numJ1').value = ''

    messageDOM.innerHTML = ''

    if (!numJ1) {
        return
    }

    if (numJ1 < 1 || numJ1 > 100) {
        messageDOM.innerHTML = 'El número debe ser entre 1 y 100'
        return
    }

    document.querySelector('#numJ1-input').style.display = 'none'
    document.querySelector('#numJ1-btn').style.display = 'none'
    document.querySelector('#cpu-btn').style.display = 'none'

    document.querySelector('#guess-input').style.display = 'flex'
    document.querySelector('#guess-btn').style.display = 'block'

}

function getCpuNum() {
    numJ1 = Math.floor(Math.random() * 100) + 1

    document.querySelector('#numJ1-input').style.display = 'none'
    document.querySelector('#numJ1-btn').style.display = 'none'
    document.querySelector('#cpu-btn').style.display = 'none'

    document.querySelector('#guess-input').style.display = 'flex'
    document.querySelector('#guess-btn').style.display = 'block'
}

function displayResult() {
    let guess = Number(document.querySelector('#guess').value)
    document.querySelector('#guess').value = ''

    messageDOM.innerHTML = ''

    if (!guess) {
        return
    }

    tries++

    if (guess === numJ1) {
        document.querySelector('#guess').disabled = true
        document.querySelector('#result').innerHTML = `
            <p class="result">Adivinaste!</p>
            <p class="result">Intentos: ${tries}</p>
            <button type="button" class="btn margins" onclick="start()">Siguiente</button>
        `

        document.querySelector('#guess-btn').style.display = 'none'
    } else {
        if (Math.abs(numJ1 - guess) > 15) {
            messageDOM.innerHTML = 'Estas lejos...'
        } else if (Math.abs(numJ1 - guess) >= 10) {
            messageDOM.innerHTML = 'Te estas acercando.'
        } else if (Math.abs(numJ1 - guess) >= 5) {
            messageDOM.innerHTML = 'Cada vez mas cerca!'
        } else if (Math.abs(numJ1 - guess) >= 1) {
            messageDOM.innerHTML = 'Muy pero muy cerca!!!'
        }
    }
}