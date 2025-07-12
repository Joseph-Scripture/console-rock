// --- SETUP ---
const containerDiv = document.querySelector('.container');
const resultDiv = document.createElement('div');
const allButtons = document.querySelectorAll('button');

let score = {
    playerScore: 0,
    computerScore: 0,
};

// Create display elements once and store them
const scoreParagraph = document.createElement('p');
const computerScoreDisplay = document.createElement('p');
const finalMessage = document.createElement('h2'); // For the final winner message

resultDiv.style.marginTop = '60px';
containerDiv.append(resultDiv);

// --- GAME LOGIC ---

function getComputerMove() {
    const value = Math.floor(Math.random() * 3);
    if (value === 0) {
        return 'rock';
    } else if (value === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function updateScoreDisplay() {
    scoreParagraph.textContent = `Player Score: ${score.playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${score.computerScore}`;
}

function endGame() {
    // Determine winner and set final message
    if (score.playerScore > score.computerScore) {
        finalMessage.textContent = 'Congratulations! You won the game!';
        finalMessage.style.color = 'green';
    } else {
        finalMessage.textContent = 'Game Over. The computer won.';
        finalMessage.style.color = 'red';
    }
    resultDiv.append(finalMessage);

    // Disable game buttons
    allButtons.forEach(button => {
        button.disabled = true;
    });

    // Add a "Play Again" button
    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play Again';
    playAgainButton.style.marginTop = '20px';
    containerDiv.append(playAgainButton);

    playAgainButton.addEventListener('click', () => {
        resetGame(playAgainButton);
    });
}

function resetGame(buttonToRemove) {
    // Reset scores
    score.playerScore = 0;
    score.computerScore = 0;

    // Clear all messages
    resultDiv.innerHTML = '';
    finalMessage.textContent = '';


    // Re-enable game buttons
    allButtons.forEach(button => {
        button.disabled = false;
    });

    // Remove the "Play Again" button
    containerDiv.removeChild(buttonToRemove);
}

function playRound(humanSelection) {
    resultDiv.innerHTML = ''; // Clear previous round results
    const computerSelection = getComputerMove();

    const roundMessage = document.createElement('p');

    if (humanSelection === computerSelection) {
        roundMessage.textContent = 'It\'s a tie this round!';
    } else if (
        (humanSelection === 'rock' && computerSelection === 'scissors') ||
        (humanSelection === 'paper' && computerSelection === 'rock') ||
        (humanSelection === 'scissors' && computerSelection === 'paper')
    ) {
        roundMessage.textContent = `You win! ${humanSelection} beats ${computerSelection}.`;
        score.playerScore++;
    } else {
        roundMessage.textContent = `You lose. ${computerSelection} beats ${humanSelection}.`;
        score.computerScore++;
    }

    resultDiv.append(roundMessage);
    updateScoreDisplay(); // Update score text after every round
    resultDiv.append(scoreParagraph);
    resultDiv.append(computerScoreDisplay);

    // Check for a winner
    if (score.playerScore === 5 || score.computerScore === 5) {
        endGame();
    }
}

// --- INITIALIZE GAME ---

allButtons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent.toLowerCase());
    });
});