document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let sueldo = Number(document.querySelector("#sueldo").value)

    document.querySelector("#sueldo").value = ''

    if (sueldo <= 39620) {
        document.querySelector('#result').innerHTML = `$0`
        return
    }


    let cantDeFranjas = -1

    if (sueldo > 39620) {
        cantDeFranjas++
    }
    if (sueldo > 56600) {
        cantDeFranjas++
    }
    if (sueldo > 84900) {
        cantDeFranjas++
    }
    if (sueldo > 169800) {
        cantDeFranjas++
    }
    if (sueldo > 283000) {
        cantDeFranjas++
    }
    if (sueldo > 424500) {
        cantDeFranjas++
    }
    if (sueldo > 650900) {
        cantDeFranjas++
    }

    let franjas = [
        { sup: 56600, inf: 39621 },
        { sup: 84900, inf: 56601 },
        { sup: 169800, inf: 84901 },
        { sup: 283000, inf: 169801 },
        { sup: 424500, inf: 283001 },
        { sup: 650900, inf: 424501 },
    ]

    let porcentajes = [0.1, 0.15, 0.24, 0.25, 0.27, 0.31, 0.36]

    console.log(cantDeFranjas)
    let irpf = 0
    for (let i = 0; i < cantDeFranjas; i++) {
        irpf += (franjas[i].sup - franjas[i].inf) * porcentajes[i]
    }

    if (cantDeFranjas < franjas.length - 1) {
        irpf += (sueldo - franjas[cantDeFranjas].inf) * porcentajes[cantDeFranjas + 1]
    }
    
    document.querySelector('#result').innerHTML = `$${irpf}`
}