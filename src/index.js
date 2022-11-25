const paragraphPassword = document.querySelector ('#password');
const form = document.querySelector ('#form');
const btnCopy = document.querySelector ('#button-copy');

const API = 'https://goquotes-api.herokuapp.com/api/v1/random?count=5';

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = ["'", ":", "!", "@", "#", "$", "^", ")", "&", "*", "%", "-"];
let words = []; 

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

    strongPassword = strongPassword.join ('');
    paragraphPassword.value = strongPassword;
};

function fetchData (API) {
    fetch (API)
        .then ((response) => response.json ())
        .then ((data) => {
            // words = data.quotes.map (quote => quote.text);
            console.log (data);
        });
}; 

fetchData (API); 

function getRandomNumber (min, max) {
    return Math.floor (Math.random () * (max - min + 1))
};

// Botón de copiar la contraseña
function copyToClipBoard (target) {
    const element = document.querySelector (target);
    const value = element.value;    

    if (value.length === 0) {
        alert ('Primero tienes que generar una contraseña');
    } else {
        window.navigator.clipboard.writeText(value);
        alert ('Contraseña copiada con exito.');
    };
};

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

btnCopy.addEventListener ('click', () => {
    copyToClipBoard ('#password');
});
