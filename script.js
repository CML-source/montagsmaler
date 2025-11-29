let words = [];

function getWordList() {
    fetch('words.txt')
        .then(function(response) {
            return response.text();
        })
        .then(function(text) {
            words = text.split(',');
            console.log('Wörter geladen:', words);
        });

}

function getRandomWord() {
    if (words.length === 0) {
        console.error('Word list is empty.');
        return null;
    }
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}
function onClickStartGame() {
    const word = getRandomWord();
    if (word) {
        const wordDisplay = document.querySelector('#newWord');
        const oldWordsDisplay = document.querySelector('#oldWords');
        oldWordsDisplay.textContent += wordDisplay.textContent + ', ';
        wordDisplay.textContent = word;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getWordList();
    console.log('Wörter geladen:', words);
    const startButton = document.getElementById('startButton');
    startButton.addEventListener('click', onClickStartGame);
});