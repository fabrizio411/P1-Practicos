let counter = 0

document.querySelector('#btn').addEventListener('click', incrementar)

function incrementar() {
    counter++

    document.querySelector('#result').innerHTML = counter
}