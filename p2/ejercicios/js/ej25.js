let stock
let topClientName
let topClientCant
let count

function start() {
    stock = 0
    topClientName = ''
    topClientCant = 0
    count = 0

    document.querySelector('#result').innerHTML = ''

    document.querySelector('#stock-input').style.display = 'flex'
    document.querySelector('#stock-btn').style.display = 'block'

    document.querySelector('#name-input').style.display = 'none'
    document.querySelector('#cant-input').style.display = 'none'
    document.querySelector('#pedido-btn').style.display = 'none'
}

start()

document.querySelector('#stock-btn').addEventListener('click', getStock)
document.querySelector('#pedido-btn').addEventListener('click', displayResult)

function getStock() {
    stock = Number(document.querySelector('#stock').value)

    document.querySelector('#stock').value = ''

    if (!stock) {
        return
    }

    document.querySelector('#stock-input').style.display = 'none'
    document.querySelector('#stock-btn').style.display = 'none'


    document.querySelector('#name-input').style.display = 'flex'
    document.querySelector('#cant-input').style.display = 'flex'
    document.querySelector('#pedido-btn').style.display = 'block'

}

function displayResult() {
    let clientName = document.querySelector('#name').value
    let cantUnidades = Number(document.querySelector('#cant').value)

    document.querySelector('#message').innerHTML = ''

    document.querySelector('#name').value = ''
    document.querySelector('#cant').value = ''

    if (!clientName) {
        return
    }
    

    if (cantUnidades <= stock) {
        stock -= cantUnidades
        count++
        if (cantUnidades > topClientCant) {
            topClientCant = cantUnidades
            topClientName = clientName
        }

    } else {
        document.querySelector('#message').innerHTML = `
            <p>No hay suficiente stock</p>
            <p>Quedan ${stock} unidades</p>
            <p>Intente nuevamente</p>
        `
        return
    }

    if (stock === 0) {
        document.querySelector('#result').innerHTML = `
            <p class="result">Mejor Cliente => ${topClientName}</p>
            <p class="result">Cantidad de pedidos => ${count}</p>
            <button type="button" class="btn margins" onclick="start()">Siguiente</button>
        `

        document.querySelector('#pedido-btn').style.display = 'none'
    }
}