// Display de datos del ejercicio en Practico
const url = window.location.href

let exerciseNum = parseInt(url.split('#')[1])

if (!exerciseNum || exerciseNum < 1 || exerciseNum > letras.length) {
    exerciseNum = 1
}

// Control de flechitas

function nextEj() {
    exerciseNum++
    updateData()
}

function prevEj() {
    exerciseNum--
    updateData()
}

function updateData() {
    if (exerciseNum === letras.length) {
        document.querySelector('#next').style.display = 'none'
    } else {
        document.querySelector('#next').style.display = 'block'
    } 

    if (exerciseNum === 1) {
        document.querySelector('#prev').style.display = 'none'
    } else {
        document.querySelector('#prev').style.display = 'block'
    }
    
    window.location.href = url.split('#')[0] + `#${exerciseNum}`
    document.querySelector('#ej-num').innerHTML = exerciseNum
    document.querySelector('#letra').innerHTML = letras[exerciseNum - 1]
    
    document.querySelector('#iframe').src = `./ejercicios/pages/ej${exerciseNum}.html`
    
    document.querySelector('#link-toOriginal').href = `./ejercicios/pages/ej${exerciseNum}.html`
}

updateData()



