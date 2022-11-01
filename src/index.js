const paragraphPassword = document.querySelector ('#password')
const form = document.querySelector ('#form')

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const symbols = ["'", ":", "!", "@", "#", "$", "^", ")", "&", "*", "%", "-"]


function genratePassword (passwordLength, checks) {
    const doubleArr = []

    if (checks.letters) {
        doubleArr.push (letters)
    }

    if (checks.numbers) {
        doubleArr.push (numbers)
    }

    if (checks.symbols) {
        doubleArr.push (symbols)
    }

    console.log (doubleArr)
    
    let strongPassword = []
    
    for (let i = 0; i < passwordLength; i++) {
        const arr = doubleArr [getRandomNumber (0, doubleArr.length - 1)]
        const randomCharacter = arr[getRandomNumber (0, arr.length -1)]
    
        strongPassword.push (randomCharacter)
    }

    strongPassword = strongPassword.join ('')
    paragraphPassword.innerText = `Tu nueva contraseña es: ${strongPassword}`}

function getRandomNumber (min, max) {
    return Math.floor (Math.random () * (max - min + 1))
}

form.addEventListener ('submit', (event) => {
    event.preventDefault ()
    const formElement = event.target
    const passwordLength = formElement.length.value
    const checks = {
        letters: formElement.letters.checked,
        words: formElement.words.checked,
        numbers: formElement.numbers.checked,
        symbols: formElement.symbols.checked
    }

    console.log (checks)

    genratePassword (passwordLength, checks)
})