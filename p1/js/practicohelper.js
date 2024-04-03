// Display de datos del ejercicio en Practico
const url = window.location.href

let exerciseNum = parseInt(url.split('#')[1])

if (!exerciseNum || exerciseNum < 1 || exerciseNum > letras.length) {
    exerciseNum = 1
}

// Control de flechitas - Siguente, Anterior
function nextEj() {
    exerciseNum++
    updateData()
}

function prevEj() {
    exerciseNum--
    updateData()
}

function updateData() {
    // Display de la navegacion en casos borde
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
    
    //Cambiar el URL segun el ejercicio que se entra, y al movierse entre ejercicios
    window.location.href = url.split('#')[0] + `#${exerciseNum}`
    document.querySelector('#ej-num').innerHTML = exerciseNum
    document.querySelector('#letra').innerHTML = letras[exerciseNum - 1]

    // Volver el maxHeight a lo normal
    document.querySelector('#letra').style.maxHeight = ''

    // Agregar flechita para mostrar toda la letra en caso de que sea muy larga
    if (document.querySelector('#letra').clientHeight > 36) {
        let prevHeight = document.querySelector('#letra').clientHeight
        document.querySelector('#letra').style.maxHeight = '36px'

        // Eliminar la flechita en caso de que exista una previa
        if (document.querySelector('#more-btn')) {
            document.querySelector('#more-btn').remove()
        }

        // Crear flechita de despliegie. Agregar clases - id y eventListener
        // Flechita dentro del contenedor de la Letra
        let moreBtn = document.createElement('div')
        moreBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 21"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>'
        moreBtn.classList.add('nav-btn')
        moreBtn.classList.add('more-btn')
        moreBtn.id = 'more-btn'
        document.querySelector('#letra-box').appendChild(moreBtn)
        moreBtn.addEventListener('click', () => displayLetra(moreBtn, prevHeight))
    } else if (document.querySelector('#more-btn')) {
        // En caso de que no se precise flecha y exista una eliminarla
        document.querySelector('#more-btn').remove()
    }
    

    // Links del iFrame y de la pagina original del ejericio
    document.querySelector('#iframe').src = `./ejercicios/pages/ej${exerciseNum}.html`
    
    document.querySelector('#link-toOriginal').href = `./ejercicios/pages/ej${exerciseNum}.html`
}


// Intercambia el estado de muestra y oculto de la letra
function displayLetra(moreBtn, prevHeight) {
    if (document.querySelector('#letra').clientHeight > 36) {
        document.querySelector('#letra').style.maxHeight = '36px'
        moreBtn.classList.remove('active')
    } else {
        document.querySelector('#letra').style.maxHeight = `${prevHeight + 50}px`
        moreBtn.classList.add('active')
    }
}

updateData()