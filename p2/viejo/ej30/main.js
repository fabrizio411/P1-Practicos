// Selector
const selector = document.getElementById('selector')
let isSelectorOpen = false

function handleSelector() {
    if (isSelectorOpen) {
        isSelectorOpen = false
        selector.style.display = 'none'
    }
    else {
        isSelectorOpen = true
        selector.style.display = 'flex'
    }
}

// Piezas Display
const pieces = [
    '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>',
    '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12c.001 5.515 4.487 10.001 10 10.001 5.514 0 10-4.486 10.001-10.001 0-5.514-4.486-10-10.001-10zm0 18.001c-4.41 0-7.999-3.589-8-8.001 0-4.411 3.589-8 8-8 4.412 0 8.001 3.589 8.001 8-.001 4.412-3.59 8.001-8.001 8.001z"></path></svg>',
    '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M11 19.91 10 22h4l-1-2.09c4-.65 7-5.28 7-9.91a8 8 0 0 0-16 0c0 4.63 3.08 9.26 7 9.91zm1-15.66v1.5A4.26 4.26 0 0 0 7.75 10h-1.5A5.76 5.76 0 0 1 12 4.25z"></path></svg>',
    '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24"><path d="M15.16 2a1 1 0 0 0-.66.13l-12 7a.64.64 0 0 0-.13.1l-.1.08a1.17 1.17 0 0 0-.17.26.84.84 0 0 0-.1.43v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V10a8.08 8.08 0 0 0-6.84-8zm0 2.05A6.07 6.07 0 0 1 19.93 9H6.7zM6.5 18A1.5 1.5 0 1 1 8 16.5 1.5 1.5 0 0 1 6.5 18zm5-3a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5zm5.5 3a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"></path></svg>',
    '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path d="m18 10-6-8-6 8h3l-5 8h7v4h2v-4h7l-5-8h3z"></path></svg>',
    '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24"><path d="M6 3h2v2H6zm2 16h3v2H8zm8-16h2v2h-2zm-3 16h3v2h-3zm7-8V9h-2V7h-2V5h-2v2h-4V5H8v2H6v2H4v2H2v8h2v-4h2v4h2v-3h8v3h2v-4h2v4h2v-8zm-10 1H8V9h2zm6 0h-2V9h2z"></path></svg>',
    '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path d="M17 14a5 5 0 0 0 2.71-.81L20 13a3.16 3.16 0 0 0 .45-.37l.21-.2a4.48 4.48 0 0 0 .48-.58l.06-.08a4.28 4.28 0 0 0 .41-.76 1.57 1.57 0 0 0 .09-.23 4.21 4.21 0 0 0 .2-.63l.06-.25A5.5 5.5 0 0 0 22 9V2l-3 3h-4l-3-3v7a5 5 0 0 0 5 5zm2-7a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm-4 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"></path><path d="M11 22v-5H8v5H5V11.9a3.49 3.49 0 0 1-2.48-1.64A3.59 3.59 0 0 1 2 8.5 3.65 3.65 0 0 1 6 5a1.89 1.89 0 0 0 2-2 1 1 0 0 1 1-1 1 1 0 0 1 1 1 3.89 3.89 0 0 1-4 4C4.19 7 4 8.16 4 8.51S4.18 10 6 10h5.09A6 6 0 0 0 19 14.65V22h-3v-5h-2v5z"></path></svg>',
    '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24"><path d="M3 11v8h.051c.245 1.692 1.69 3 3.449 3 1.174 0 2.074-.417 2.672-1.174a3.99 3.99 0 0 0 5.668-.014c.601.762 1.504 1.188 2.66 1.188 1.93 0 3.5-1.57 3.5-3.5V11c0-4.962-4.037-9-9-9s-9 4.038-9 9zm6 1c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm6-4c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path></svg>',
    '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24"><path d="M21.986 9.74a3.193 3.193 0 0 0-.008-.088A5.003 5.003 0 0 0 17 5H7a4.97 4.97 0 0 0-4.987 4.737c-.01.079-.013.161-.013.253v6.51c0 .925.373 1.828 1.022 2.476A3.524 3.524 0 0 0 5.5 20c1.8 0 2.504-1 3.5-3 .146-.292.992-2 3-2 1.996 0 2.853 1.707 3 2 1.004 2 1.7 3 3.5 3 .925 0 1.828-.373 2.476-1.022A3.524 3.524 0 0 0 22 16.5V10c0-.095-.004-.18-.014-.26zM7 12.031a2 2 0 1 1-.001-3.999A2 2 0 0 1 7 12.031zm10-5a1 1 0 1 1 0 2 1 1 0 1 1 0-2zm-2 4a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm2 2a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm2-2a1 1 0 1 1 0-2 1 1 0 1 1 0 2z"></path></svg>'
]

let piecesHtml = ''
pieces.forEach((item, i) => {
    piecesHtml += `
        <div class="piece-box" onclick="handleSelect(this, ${i})">${item}</div>
    `
})

document.getElementById('pieces').innerHTML = piecesHtml

// Handle Select de una pieza
let choiceTurn = 1

let player1 = pieces[0]
let player2 = pieces[1]

let prevPiece1
let prevPiece2
function handleSelect(piece, index) {
    if (choiceTurn % 2 != 0) {
        if (prevPiece1 && player1 != pieces[index]) {
            prevPiece1.classList.remove('active')
        }
        player1 = pieces[index]
        prevPiece1 = piece
    } else {
        if (piece != prevPiece1) {
            if (prevPiece2 && player2 != pieces[index]) {
                prevPiece2.classList.remove('active')
            }
            player2 = pieces[index]
            prevPiece2 = piece
        }
    }

    piece.classList.add('active')

}

// Confirm Handle y cambio de jugadores para elejir
function updateChoice() {
    document.querySelector('#player-choice').innerHTML = `Elije: Jugador ${choiceTurn & 2 != 0 ? '1' : '2'}`
}
updateChoice()

function confirmHandle() {
    choiceTurn++
    
    if (choiceTurn <= 2) {
        updateChoice()
    } else {
        handleSelector()
    }

}


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
        winDisplay.innerHTML = `${player1} Es el ganador`
    } else if (winner === 'O') {
        winDisplay.innerHTML = `${player2} Es el ganador`
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
        square.innerHTML = player1
        tateti[posX][posY] = 'X'
    } else {
        square.innerHTML = player2
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

