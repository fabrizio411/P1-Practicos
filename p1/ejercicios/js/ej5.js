function displayResult() {
    const val = parseInt(document.querySelector('#val').value)

    if (!val) {
        return
    }

    const result = val * 2

    document.querySelector('#result').innerHTML = result
    document.querySelector('#square').style.height = `${val}px`
    document.querySelector('#square').style.width = `${val}px`
}