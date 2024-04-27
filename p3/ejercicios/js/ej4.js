let result = ''
for (let i = 20; i >= -30; i--) {
    result += i + '<br>'
}

document.querySelector('#result').innerHTML = result
