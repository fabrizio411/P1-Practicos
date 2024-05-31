class Sistema {
    constructor() {
        this.personas = []
        
    }
}

class Persona {
    constructor(nombre, edad, nacionalidad) {
        this.nombre = nombre
        this.edad = edad
        this.nacionalidad = nacionalidad
    }
}

const sistema = new Sistema()

document.querySelector('#btnIngresar').addEventListener('click', procesarDatos)
function procesarDatos() {
    let nombre = document.querySelector('#nombre').value
    let edad = Number(document.querySelector('#edad').value)
    let nacionalidad = document.querySelector('#nacionalidad').value

    let nuevaPersona = new Persona(nombre, edad, nacionalidad)
    sistema.personas.push(nuevaPersona)

    console.log(sistema.personas)
}

document.querySelector('#btnTabla').addEventListener('click', procesarTabla)
function procesarTabla() {
    let tablaString = armarTabla(sistema.personas)

    document.querySelector('#tabla').innerHTML = tablaString

}

document.querySelector('#btnTablaMayores').addEventListener('click', procesarTablaMayores)
function procesarTablaMayores() {

    let personasMayores = []
    for (let i = 0; i < sistema.personas.length; i++) {
        const persona = sistema.personas[i];
        if (persona.edad >= 18) {
            personasMayores.push(persona)
        }
    }


    let tablaString = armarTabla(personasMayores)

    document.querySelector('#tabla').innerHTML = tablaString

}

function armarTabla(personas) {
    tablaHTML = `
    <thead>
        <td>Nombre</td>
        <td>Edad</td>
        <td>Nacionalidad</td>
    </thead>
    `

    let dataHTML = ''
    for (let i = 0; i < personas.length; i++) {
        const persona = personas[i];
        dataHTML += `
        <tr>
            <td>${persona.nombre}</td>
            <td>${persona.edad}</td>
            <td>${persona.nacionalidad}</td>
        </tr>
        `
    }

    tablaHTML += `
    <tbody>${dataHTML}</tbody>
    `

    return tablaHTML
}