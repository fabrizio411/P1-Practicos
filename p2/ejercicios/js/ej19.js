let count = 0
let multiplos5 = 0
let mayores20 = 0
let cumplenAmbas = 0

document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let val = Number(document.querySelector("#val").value)

    document.querySelector("#val").value = ''
    document.querySelector("#val").focus()
    
    count++
    
    if (count >= 5) {
        document.querySelector('#message').innerHTML = 'Ya se ingresaron 5 valores'
        return
    }

    if (val % 5 === 0 && val > 20) {
        multiplos5++
        mayores20++
        cumplenAmbas++
    } else if (val % 5 === 0) {
        multiplos5++
    } else if (val > 20) {
        mayores20++
    }

    document.querySelector('#result').innerHTML = `
        Múltiplos de 5 => ${multiplos5}<br>
        Mayores que 20 => ${mayores20}<br>
        Cumplen ambas => ${cumplenAmbas}
    `
}