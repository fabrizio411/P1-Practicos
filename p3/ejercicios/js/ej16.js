document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let a = Number(document.querySelector("#a").value)
    let b = Number(document.querySelector("#b").value)
    let c = Number(document.querySelector("#c").value)

    document.querySelector("#a").value = ''
    document.querySelector("#b").value = ''
    document.querySelector("#c").value = ''
    
    if (!a || !b || !c) {
        return
    }

    if (a > b && a > c) {
        document.querySelector('#result').innerHTML = "A es el mayor de todos"
    }
}