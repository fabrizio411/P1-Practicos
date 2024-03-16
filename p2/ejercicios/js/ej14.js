function displayResult() {
    const millas = parseInt(document.querySelector('#millas').value)
    const clPlus = document.querySelector('#clPlus').value

    if (!millas || !clPlus) {
        return
    }

    let totalMillas = millas
    if (clPlus === 's') {
        totalMillas *= 2
    }

    let result = 'Millas insuficientes para viajar'
    if (totalMillas > 60000) {
        result = 'Europa'
    } else if (totalMillas > 30000) {
        result = 'América del Norte'
    } else if (totalMillas > 15000) {
        result = 'América del Sur'
    }
    
    document.querySelector('#result').innerHTML = result
}