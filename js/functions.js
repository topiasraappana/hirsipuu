const input = document.querySelector('input');
const output = document.querySelector('output');
const span = document.querySelector('span');

const words = [
    "programming",
    "javascript",
    "database",
    "markup",
    "framework",
    "variable",
    "stylesheet",
    "library",
    "asynchronous",
    "hypertext"
];

let randomizedWord = '';
let maskedWord = '';
let guesses = 0;

const newGame = () => {
    const random = Math.floor(Math.random() * words.length);
    randomizedWord = words[random];
    maskedWord = "*".repeat(randomizedWord.length);
    output.textContent = maskedWord;
    guesses = 0; 
    span.textContent = guesses; 
};

const win = () => {
    alert(`You have guessed right, the word is ${randomizedWord}. Number of guesses: ${guesses}`);
    newGame();
};

const replaceFoundChars = (guess) => {
    let found = false;
    for (let i = 0; i < randomizedWord.length; i++) {
        const char = randomizedWord.substring(i, i + 1);
        if (char === guess) {
            let newString = maskedWord.split('');
            newString.splice(i, 1, guess);
            maskedWord = newString.join('');
            found = true;
        }
    }
    output.textContent = maskedWord;
    if (found) {
        guesses++;
        span.textContent = guesses;
    }  else {
        guesses++
        span.textContent = guesses;

    }
};

newGame();

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        const guess = input.value.toLowerCase();
        if (guess === randomizedWord.toLowerCase()) {
            win();
        } else if (guess.length === 1) {
            replaceFoundChars(guess);
            if (maskedWord === randomizedWord) {
                win();
            }
        } else {
            alert("You guessed wrong!");
        }
        input.value = '';
    }
});
