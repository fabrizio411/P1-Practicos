document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let matricula = document.querySelector('#matricula').value

    document.querySelector('#matricula').value = ''

    let letraMatricula = matricula[0].toLowerCase()

    let result = "Matricula incorrecta"
    switch (letraMatricula) {
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