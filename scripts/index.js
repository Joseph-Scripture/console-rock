// console.log('hellow')
let playerScore = 0;
let computerScore = 0;

// Plays 5 rounds of the game
for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerMove();
    playRound(humanSelection, computerSelection);
    console.log(`Score: Player ${playerScore}, Computer ${computerScore}`);
    console.log('---------------------');
}

// After 5 rounds, declare a final winner
console.log(' GAME OVER ');
if (playerScore > computerScore) {
    console.log(`Your final score is ${playerScore}. You win the game!`);
} else if (computerScore > playerScore) {
    console.log(`Computer wins with a final score of ${computerScore}.`);
} else {
    console.log(`It's a tie with a final score of ${playerScore} to ${computerScore}.`);
}


// --- FUNCTIONS ---

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

function getHumanChoice() {
    let humanMove = prompt('Enter Your Move: (rock, paper, or scissors)');
    // Basic validation to ensure the input is one of the three options
    while (humanMove === null || !['rock', 'paper', 'scissors'].includes(humanMove.trim().toLowerCase())) {
        alert('Invalid input! Please enter rock, paper, or scissors.');
        humanMove = prompt('Enter Your Move: (rock, paper, or scissors)');
    }
    return humanMove.trim().toLowerCase();
}

function playRound(humanSelection, computerSelection) {
    console.log(`You chose: ${humanSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    if (humanSelection === computerSelection) {
        console.log('It\'s a tie! No points awarded.');
        return; // Exit the function early
    }

    if (
        (humanSelection === 'rock' && computerSelection === 'scissors') ||
        (humanSelection === 'paper' && computerSelection === 'rock') ||
        (humanSelection === 'scissors' && computerSelection === 'paper')
    ) {
        console.log(`You win this round! ${humanSelection} beats ${computerSelection}.`);
        playerScore++;
    } else {
        console.log(`You lose this round! ${computerSelection} beats ${humanSelection}.`);
        computerScore++;
    }
}