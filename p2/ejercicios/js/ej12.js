function displayResult() {
    const weight = parseFloat(document.querySelector('#weight').value)
    const height = parseFloat(document.querySelector('#height').value)

    if (!weight || !height) {
        return
    }

    const result = (weight / (height ** 2)).toFixed(1)

    document.querySelector('#result').innerHTML = result
}