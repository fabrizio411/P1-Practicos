let counter = 0

document.querySelector('#btn').addEventListener('click', incrementar)

function incrementar() {
    counter += 3

    document.querySelector('#result').innerHTML = counter
}