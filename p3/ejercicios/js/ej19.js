document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let mes = Number(document.querySelector("#mes").value)
    let dia = Number(document.querySelector("#dia").value)

    document.querySelector("#mes").value = ''
    document.querySelector("#dia").value = ''
    
    let mesesCortos = '4 6 9 11'

    let diasMes = 31
    if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
        diasMes = 30
    } else if (mes === 2) {
        diasMes = 28
    }

    let semanas = Math.ceil((diasMes + dia) / 7)

    let tablaHtml = ''

    let diaContador = 1


    for (let i = 1; i <= semanas; i++) {
        let trData = ''

        for (let j = 1; j <= 7; j++) {
            if(diaContador > diasMes) {
                trData += '<td></td>'
            } else if (j < dia && i === 1) {
                trData += '<td></td>'
            } else {
                trData += `
                <td>${diaContador}</td>
                `
                diaContador++
            }
        }

        tablaHtml += `<tr>${trData}</tr>`
    }

    document.querySelector('#tabla').innerHTML = `
    <thead>
        <td>L</td>
        <td>M</td>
        <td>M</td>
        <td>J</td>
        <td>V</td>
        <td>S</td>
        <td>D</td>
    </thead>
    <tbody>${tablaHtml}</tbody>
    `
}