class Sistema {
    constructor() {
        this.partidos = [
            new Partido('A', 391000),
            new Partido('B', 311000),
            new Partido('C', 184000),
            new Partido('D', 73000),
            new Partido('E', 27000),
            new Partido('F', 12000),
            new Partido('G', 2000),
        ]
        this.totalVotos = 1000000
        this.escanios = 21
    }

    creatPartido(nombre, votos) {
        sistema.totalVotos += votos
        const nuevoParitdo = new Partido(nombre, votos)
        this.partidos.push(nuevoParitdo)
    }
}

class Partido {
    constructor(nombre, votos) {
        this.nombre = nombre
        this.votos = votos
        this.escanios = null
        this.residuo = null
    }
}



const sistema = new Sistema()

document.querySelector('#btn').addEventListener('click', procesarDatos)
function procesarDatos() {
    let nombre = document.querySelector('#nombre').value
    let votos = Number(document.querySelector('#votos').value)

    sistema.creatPartido(nombre, votos)
}

armarTabla()

function armarTabla() {
    let cociente = Math.round(sistema.totalVotos / sistema.escanios)
    let escaniosUsados = 0


    for (let i = 0; i < sistema.partidos.length; i++) {
        const partido = sistema.partidos[i]
        partido.escanios = Math.floor(partido.votos / cociente)
        partido.residuo = partido.votos - (partido.escanios * cociente)
        escaniosUsados += partido.escanios
    }

    console.log(sistema.partidos)

    let escaniosResiduo = sistema.escanios - escaniosUsados
    let partidosConMasResiudo = new Array(escaniosResiduo)
    for (let i = 0; i < sistema.partidos.length; i++) {
        const partido = sistema.partidos[i]
        for (let j = 0; j < partidosConMasResiudo.length; j++) {
            const topPartido = partidosConMasResiudo[j]
            if (!topPartido) {
                partidosConMasResiudo.splice(j, 1, partido)
                break
            } else {
                if (partido.residuo > topPartido.residuo) {
                    partidosConMasResiudo.splice(j, 0, partido)
                    partidosConMasResiudo.pop()
                    break
                }
            }
        }
    }

    for (let i = 0; i < partidosConMasResiudo.length; i++) {
        const partido = partidosConMasResiudo[i]
        partido.escanios++
    }


    let dataHTML = ''
    for (let i = 0; i < sistema.partidos.length; i++) {
        const partido = sistema.partidos[i]
        dataHTML += `
        <tr>
            <td>${partido.nombre}</td>
            <td>${partido.escanios}</td>
        </tr>
        `
    }

    document.querySelector('#tableData').innerHTML = dataHTML
}