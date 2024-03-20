document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let dptoCode = document.querySelector('#dptoCode').value

    document.querySelector('#dptoCode').value = ''

    if (!dptoCode) {
        return
    }

    let result = "Codigo Incorrecto"
    switch (dptoCode.toLowerCase()) {
        case "a":
            result = "Canelones"
            break;
        case "b":
            result = "Maldonado"
            break;
        case "c":
            result = "Rocha"
            break;
        case "d":
            result = "Treinta y Tres"
            break;
        case "e":
            result = "Cerro Largo"
            break;
        case "f":
            result = "Rivera"
            break;
        case "g":
            result = "Artigas"
            break;
        case "h":
            result = "Salto"
            break;
        case "i":
            result = "Paysandú"
            break;
        case "j":
            result = "Rio Negro"
            break;
        case "k":
            result = "Soriano"
            break;
        case "l":
            result = "Colonia"
            break;
        case "m":
            result = "San José"
            break;
        case "n":
            result = "Flores"
            break;
        case "o":
            result = "Florida"
            break;
        case "p":
            result = "Lavalleja"
            break;
        case "q":
            result = "Durazno"
            break;
        case "r":
            result = "Tacuarembó"
            break;
        case "s":
            result = "Montevideo"
            break;
    }
    
    document.querySelector('#result').innerHTML = result
}