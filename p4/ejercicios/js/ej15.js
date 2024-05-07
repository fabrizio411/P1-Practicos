document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let texto = document.querySelector('#text').value.toLowerCase()

    let aIndex
    let aCounter = 0
    
    for (let i = texto.length - 1; i >= 0 && aCounter < 2; i--) {
        if (texto[i] === 'a') {
            aIndex = i
            aCounter++
        }
    }

    if (aCounter === 1 || aCounter === 0) {
        aIndex = -1
    }
    
    document.querySelector('#result').innerHTML = aIndex
}