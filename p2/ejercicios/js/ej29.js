// Constantes y variables generales
const board = document.querySelector('#board')
const boardHTML = board.innerHTML

let isGameOn = false
let winner = ''
let turn = 0
let piezasColocadas = '000000000'

let crossIcon = '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>'
let circleIcon = '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12c.001 5.515 4.487 10.001 10 10.001 5.514 0 10-4.486 10.001-10.001 0-5.514-4.486-10-10.001-10zm0 18.001c-4.41 0-7.999-3.589-8-8.001 0-4.411 3.589-8 8-8 4.412 0 8.001 3.589 8.001 8-.001 4.412-3.59 8.001-8.001 8.001z"></path></svg>'

// Manejo del estado del juego
const menu = document.getElementById('menu')

function menuHandler() {
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
}

// Reseteo del juego
function startGame() {
    turn = 0
    winner = ''
    piezasColocadas = '000000000'
    board.innerHTML = boardHTML
    menuHandler()
}

// Colocar pieza
function placePiece(square, position) {
    // Excluyentes para poner pieza
    if (!isGameOn || piezasColocadas[position] !== '0') {
        return
    }

    // Poner pieza y registrar en matriz de control
    if (turn % 2 === 0) {
        square.innerHTML = crossIcon
        piezasColocadas = piezasColocadas.substring(0, position) + 'X' + piezasColocadas.substring(position + 1)
    } else {
        square.innerHTML = circleIcon
        piezasColocadas = piezasColocadas.substring(0, position) + 'O' + piezasColocadas.substring(position + 1)

    };
    
    const win = checkWin(turn % 2 === 0 ? 'X' : 'O', position)
    if (win.win) {
        winner = win.player
        menuHandler()
        return
    }

    turn++;

    // Caso de empate
    if (turn >= 9) {
        menuHandler()
    }
}

function checkWin(player, position) {
    let win = false

    switch (position) {
        case 0: 
            if (piezasColocadas[1] === player && piezasColocadas[2] === player) {
                win = true
            } else if (piezasColocadas[3] === player && piezasColocadas[6] === player) {
                win = true
            } else if (piezasColocadas[4] === player && piezasColocadas[8] === player) {
                win = true
            }
            break
        case 1: 
            if (piezasColocadas[0] === player && piezasColocadas[2] === player) {
                win = true
            } else if (piezasColocadas[4] === player && piezasColocadas[7] === player) {
                win = true
            }
            break
        case 2:
            if (piezasColocadas[1] === player && piezasColocadas[0] === player) {
                win = true
            } else if (piezasColocadas[5] === player && piezasColocadas[8] === player) {
                win = true
            } else if (piezasColocadas[6] === player && piezasColocadas[4] === player) {
                win = true
            }
            break
        case 3:
            if (piezasColocadas[4] === player && piezasColocadas[5] === player) {
                win = true
            } else if (piezasColocadas[0] === player && piezasColocadas[6] === player) {
                win = true
            }
            break
        case 4:
            if (piezasColocadas[3] === player && piezasColocadas[5] === player) {
                win = true
            } else if (piezasColocadas[1] === player && piezasColocadas[7] === player) {
                win = true
            } else if (piezasColocadas[0] === player && piezasColocadas[8] === player) {
                win = true
            } else if (piezasColocadas[2] === player && piezasColocadas[6] === player) {
                win = true
            }
            break
        case 5:
            if (piezasColocadas[4] === player && piezasColocadas[3] === player) {
                win = true
            } else if (piezasColocadas[2] === player && piezasColocadas[8] === player) {
                win = true
            }
            break
        case 6:
            if (piezasColocadas[7] === player && piezasColocadas[8] === player) {
                win = true
            } else if (piezasColocadas[3] === player && piezasColocadas[0] === player) {
                win = true
            } else if (piezasColocadas[4] === player && piezasColocadas[2] === player) {
                win = true
            }
            break
        case 7:
            if (piezasColocadas[6] === player && piezasColocadas[8] === player) {
                win = true
            } else if (piezasColocadas[4] === player && piezasColocadas[1] === player) {
                win = true
            }
            break
        case 8:
            if (piezasColocadas[7] === player && piezasColocadas[6] === player) {
                win = true
            } else if (piezasColocadas[5] === player && piezasColocadas[2] === player) {
                win = true
            } else if (piezasColocadas[4] === player && piezasColocadas[0] === player) {
                win = true
            }
            break
    }

    return {win, player}
}