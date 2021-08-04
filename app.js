// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    // Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Entre com um número entre ${min} e ${max}`, 'red');
    }

    // Check if won
    if (guess === winningNum) {
        // Game over - won
        gameOver(true, `${winningNum} está correto!`);

    } else {
        // Wrong number
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            // Game over - lost
            gameOver(false, `Game Over. O número correto era: ${winningNum}.`);
        } else {
            // Game continues - answer wrong

            // Change border color
            guessInput.style.borderColor = 'red';

            // Clear Input
            guessInput.value = '';

            // Tell user its the wrong number
            setMessage(`${guess} não é o número correto. Você ainda tem ${guessesLeft} chance(s) de acertar!`, 'red');
        }
    }
});

// Game over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    // Set text color
    message.style.color = color;
    // Set message
    setMessage(msg);
}

// Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}