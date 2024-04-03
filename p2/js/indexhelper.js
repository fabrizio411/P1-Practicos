// Display de ejercicios en Index
const exercisesNum = letras.length

// Display de todos los ejercicios y el link
let exercisesHTML = ''
for (let i = 0; i < exercisesNum; i++) {
    exercisesHTML += `<a class="exercise" href="./practico.html#${i + 1}">Ejercicio ${i + 1}</a>`
}

document.querySelector('#exercises-display').innerHTML = exercisesHTML