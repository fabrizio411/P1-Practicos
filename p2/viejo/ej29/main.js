// Constantes y variables generales
const board = document.querySelector('#board')
const boardHTML = board.innerHTML

let isGameOn = false
let winner = ''

let turn = 0

const matriz = [
    ['', '', ''], 
    ['', '', ''], 
    ['', '', '']
]

let tateti = matriz.map((item) => ({ ...item }))

let crossIcon = '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>'
let circleIcon = '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12c.001 5.515 4.487 10.001 10 10.001 5.514 0 10-4.486 10.001-10.001 0-5.514-4.486-10-10.001-10zm0 18.001c-4.41 0-7.999-3.589-8-8.001 0-4.411 3.589-8 8-8 4.412 0 8.001 3.589 8.001 8-.001 4.412-3.59 8.001-8.001 8.001z"></path></svg>'


// Manejo del estado del juego
const menu = document.getElementById('menu')

const finishEvent = new CustomEvent('finish')
document.addEventListener('finish', () => {
    if (!isGameOn) {
        isGameOn = true
        menu.style.display = 'none'
    } else {
        isGameOn = false
        menu.style.display = 'flex'
    }

    // Winner display
    const winDisplay = document.querySelector('#winner')
    if (winner) {
        winDisplay.style.display = 'flex'
    } else {
        winDisplay.style.display = 'none'
    }

    if (winner && winner === 'X') {
        winDisplay.innerHTML = `${crossIcon} Es el ganador`
    } else if (winner === 'O') {
        winDisplay.innerHTML = `${circleIcon} Es el ganador`
    }
})


// Reseteo del juego
function startGame() {
    turn = 0
    winner = ''
    tateti = matriz.map((item) => ({ ...item }))
    board.innerHTML = boardHTML
    document.dispatchEvent(finishEvent)
}

// Colocar pieza
function placePiece(square, posX, posY) {
    
    // Excluyentes para poner pieza
    if (!isGameOn || tateti[posX][posY]) {
        return
    }

    // Poner pieza y registrar en matriz de control
    if (turn % 2 === 0) {
        square.innerHTML = crossIcon
        tateti[posX][posY] = 'X'
    } else {
        square.innerHTML = circleIcon
        tateti[posX][posY] = 'O'
    };
    
    const win = checkWin(turn % 2 === 0 ? 'X' : 'O', posX, posY)
    if (win.win) {
        winner = win.player
        document.dispatchEvent(finishEvent)
        console.log("win")
    }

    turn++;

    // Caso de empate
    if (turn >= 9) {
        document.dispatchEvent(finishEvent)
    }
}

// Checkear si gano el jugador que piso la pieza
function checkWin(player, posX, posY) {
    let win = false
    let x = 0
    let y = 0

    while (x < 3 && !win) {
        
        y = 0
        while (y < 3 && tateti[posX][y] === player) {
            y++
        }
        if (y > 2) win = true

        y = 0
        while (!win && y < 3 && tateti[y][posY] === player) {
            y++
        }
        if (y > 2) win = true

        y = 0
        while (!win && y < 3 && tateti[y][y] === player) {
            y++
        }
        if (y > 2) win = true

        y = 0
        let j = 2
        while (!win && y < 3 && tateti[y][j] === player) {
            y++
            j--
        }
        if (y > 2) win = true

        x++
    }

    return {win, player};
}

