class Sistema {
    constructor() {
        this.peliculas = []
        this.generos = [
            new Genero('Comedia', 10, 1),
            new Genero('Drama', 14, 2),
            new Genero('Terror', 18, 3)
        ]
    }

    crearPelicula(nombre, anio, generoId, votantes, puntos) {
        const nuevaPelicula = new Pelicula(nombre, anio, generoId, votantes, puntos)
        this.peliculas.push(nuevaPelicula)
    }
}

class Genero {
    constructor(nombre, edad, id) {
        this.nombre = nombre
        this.edad = edad
        this.id = id
    }
}

class Pelicula {
    constructor(nombre, anio, generoId, votantes, puntos) {
        this.nombre = nombre
        this.anio = anio
        this.generoId = generoId
        this.votantes = votantes
        this.puntos = puntos
    }
}

function armarSelect() {
    let selectString = '<option selected disabled value="-1">Elejir Opción...</option>'
    for (let i = 0; i < sistema.generos.length; i++) {
        const genero = sistema.generos[i];
        selectString += `
            <option value="${genero.id}">${genero.nombre}</option>
        `
    }

    document.querySelector('#generoId').innerHTML = selectString
}

function obtenerElemento(arr, prop, dato) {
    let elemento = null
    for (let i = 0; i < arr.length; i++) {
        const obj = arr[i];
        if (obj[prop] === dato) {
            elemento = obj
            break
        }
    }

    return elemento
}

function armarTabla() {
    tablaHTML = `
    <thead>
        <td>Nombre</td>
        <td>Año</td>
        <td>Genero</td>
        <td>Promedio de puntos</td>
    </thead>
    `

    let peliculas = 0
    let dataHTML = ''

    for (let i = 0; i < sistema.peliculas.length; i++) {
        const pelicula = sistema.peliculas[i];
        let promedio = pelicula.puntos / pelicula.votantes
        if (promedio >= 4) {
            peliculas++
            let genero = obtenerElemento(sistema.generos, 'id', pelicula.generoId)
            dataHTML += `
            <tr>
                <td>${pelicula.nombre}</td>
                <td>${pelicula.anio}</td>
                <td>${genero.nombre}</td>
                <td>${promedio}</td>
            </tr>
            `
        }
    }

    tablaHTML += `<tbody>${dataHTML}</tbody>`

    if (peliculas > 0) {
        document.querySelector('#tabla').innerHTML = tablaHTML
    } else {
        document.querySelector('#tabla').innerHTML = 'No hay datos'
    }
}

function armarTablaGeneros() {
    tablaHTML = `
    <thead>
        <td>Genero</td>
        <td>Cant. Peliculas</td>
    </thead>
    `

    let dataHTML = ''

    for (let i = 0; i < sistema.generos.length; i++) {
        const genero = sistema.generos[i];
        let cantPeliculas = 0
        for (let j = 0; j < sistema.peliculas.length; j++) {
            const pelicula = sistema.peliculas[j]
            if (pelicula.generoId === genero.id) {
                cantPeliculas++
            }
        }


        dataHTML += `
        <tr>
            <td>${genero.nombre}</td>
            <td>${cantPeliculas}</td>
        </tr>
        `
    }

    tablaHTML += `<tbody>${dataHTML}</tbody>`

    document.querySelector('#tablaGeneros').innerHTML = tablaHTML
}

const sistema = new Sistema()
armarSelect()
armarTabla()
armarTablaGeneros()

document.querySelector('#btnIngresar').addEventListener('click', ingresarPelicula)
function ingresarPelicula() {
    let nombre = document.querySelector('#nombre').value
    let anio = Number(document.querySelector('#anio').value)
    let generoId = Number(document.querySelector('#generoId').value)
    let votantes = Number(document.querySelector('#votantes').value)
    let puntos = Number(document.querySelector('#puntos').value
)
    if (!isNaN(anio) && obtenerElemento(sistema.peliculas, 'nombre', nombre) === null) {
        sistema.crearPelicula(nombre, anio, generoId, votantes, puntos)
        armarTabla()
        armarTablaGeneros()
        document.querySelector('#nombre').value = ''
        document.querySelector('#anio').value = ''
        document.querySelector('#generoId').value = '-1'
        document.querySelector('#votantes').value = ''
        document.querySelector('#puntos').value = ''
    }
}

document.querySelector('#btnBuscar').addEventListener('click', buscarPelicula)
function buscarPelicula() {
    let nombre = document.querySelector('#nombreBuscar').value

    let pelicula = obtenerElemento(sistema.peliculas, 'nombre', nombre)

    let mensaje = 'No se econtro la pelicula'
    if (pelicula !== null) {
        let genero = obtenerElemento(sistema.generos, 'id', pelicula.generoId)

        mensaje = `
        Nombre: ${pelicula.nombre}<br>
        Año: ${pelicula.anio}<br>
        Genero: ${genero.nombre}<br>
        Apta para: ${genero.edad} años<br>
        Promedio de votos: ${pelicula.puntos / pelicula.votantes} años<br>
        `
    }

    document.querySelector('#mensaje').innerHTML = mensaje
}
