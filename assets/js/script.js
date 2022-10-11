// The entire game is contained in this function
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;


    // Function to play the game
    function playGame() {
        const rockBtn = document.querySelector('.button-rock');
        const paperBtn = document.querySelector('.button-paper');
        const scissorsBtn = document.querySelector('.button-scissors');
        const humanBtn = document.querySelector('.button-human');
        const gunBtn = document.querySelector('.button-gun');
        const spongeBtn = document.querySelector('.button-sponge');
        const airBtn = document.querySelector('.button-air');
        const fireBtn = document.querySelector('.button-fire');
        const waterBtn = document.querySelector('.button-water');
        const playerOptions = [rockBtn, paperBtn, scissorsBtn, humanBtn, gunBtn, spongeBtn, airBtn, fireBtn, waterBtn];
        const computerOptions = ['rock', 'paper', 'scissors', 'human', 'gun', 'sponge', 'air', 'fire', 'water'];


        // Function to start the game when the player clicks one of the buttons
        playerOptions.forEach(option => {
            option.addEventListener('click', function() {

                const movesLeft = document.querySelector('.moves-left');
                moves++;
                movesLeft.innerText = `Moves left: ${10-moves}`;

                const choiceInteger = Math.floor(Math.random()*9);
                const computerChoice = computerOptions[choiceInteger];

                // Function that checks who wins
                winner(this.innerText, computerChoice);

                // Limits the game to 10 moves
                if (moves === 10) {
                    gameOver(playerOptions, movesLeft);
                }
            });
        });
    }

    // Function to determine the winner
    function winner(player, computer) {
        const result = document.querySelector('.result');
        const playerScoreCount = document.querySelector('.p-score');
        const computerScoreCount = document.querySelector('.c-score');
        player = player.toLowerCase();
        computer = computer.toLowerCase();

        if (player == computer) {
            result.textContent = 'Tie';
        } else if (player == 'rock' && computer == 'fire' || 'scissors' || 'human' || 'sponge') {
            result.textContent = 'You won!';
            playerScore++;
            playerScoreCount.textContent = playerScore;
        } else if (player == 'rock' && computer == 'paper' || 'air' || 'water' || 'gun') {
            result.textContent = 'Computer won!';
            computerScore++;
            computerScoreCount.textContent = computerScore;
        } else if (player == 'paper' && computer == 'rock' || 'air' || 'water' || 'gun') {
            result.textContent = 'You won!';
            computerScore++;
            computerScoreCount.textContent = computerScore;
        } else if (player == 'paper' && computer == 'fire' || 'scissors' || 'human' || 'sponge') {
            result.textContent = 'Computer won!';
            computerScore++;
            computerScoreCount.textContent = computerScore;
        } else if (player == 'scissors' && computer == 'paper' || 'air' || 'human' || 'sponge') {
            result.textContent = 'You won!';
            computerScore++;
            computerScoreCount.textContent = computerScore;
        } else if (player == 'scissors' && computer == 'rock' || 'fire' || 'water' || 'gun') {
            result.textContent = 'Computer won!';
            computerScore++;
            computerScoreCount.textContent = computerScore;
        } else if (player == 'human' && computer == 'paper' || 'air' || 'water' || 'sponge') {
            result.textContent = 'You won!';
            computerScore++;
            computerScoreCount.textContent = computerScore;
        } else if (player == 'human' && computer == 'rock' || 'fire' || 'scissors' || 'gun') {
            result.textContent = 'Computer won!';
            computerScore++;
            computerScoreCount.textContent = computerScore;
        } else if (player == 'gun' && computer == 'rock' || 'fire' || 'scissors' || 'human') {
            result.textContent = 'You won!';
            computerScore++;
            computerScoreCount.textContent = computerScore;
        } else if (player == 'gun' && computer == 'paper' || 'air' || 'water' || 'sponge') {
            result.textContent = 'Computer won!';
            computerScore++;
            computerScoreCount.textContent = computerScore;
        } else if (player == 'sponge' && computer == 'paper' || 'air' || 'water' || 'gun') {
            result.textContent = 'You won!';
            computerScore++;
            computerScoreCount.textContent = computerScore;
        } else if (player == 'sponge' && computer == 'rock' || 'fire' || 'scissors' || 'human') {
            result.textContent = 'Computer won!';
            computerScore++;
            computerScoreCount.textContent = computerScore;
        } else if (player == 'air' && computer == 'fire' || 'rock' || 'water' || 'gun') {
            result.textContent = 'You won!';
            computerScore++;
            computerScoreCount.textContent = computerScore;
        } else if (player == 'air' && computer == 'paper' || 'scissors' || 'human' || 'sponge') {
            result.textContent = 'Computer won!';
            computerScore++;
            computerScoreCount.textContent = computerScore;
        } else if (player == 'fire' && computer == 'scissors' || 'human' || 'paper' || 'sponge') {
            result.textContent = 'You won!';
            computerScore++;
            computerScoreCount.textContent = computerScore;
        } else if (player == 'fire' && computer == 'rock' || 'air' || 'water' || 'gun') {
            result.textContent = 'Computer won!';
            computerScore++;
            computerScoreCount.textContent = computerScore;
        } else if (player == 'water' && computer == 'rock' || 'fire' || 'scissors' || 'gun') {
            result.textContent = 'You won!';
            computerScore++;
            computerScoreCount.textContent = computerScore;
        } else if (player == 'water' && computer == 'paper' || 'air' || 'human' || 'sponge') {
            result.textContent = 'Computer won!';
            computerScore++;
            computerScoreCount.textContent = computerScore;
        } else {
            result.textContent = 'Something went wrong...';
        }
    } 

    // Function that will run when the game is over
    function gameOver(playerOptions, movesLeft) {
        const chooseMove = document.querySelector('.choose-move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('reload');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        });

        chooseMove.innerText = 'Game over!';
        movesLeft.style.display = 'none';

        if (playerScore > computerScore) {
            result.innerText = 'Luck is on your side!';
            result.style.fontSize = '25px';
            result.style.color = 'green';
        } else if (playerScore < computerScore) {
            result.innerText = 'The machine wins this time!';
            result.style.fontSize = '25px';
            result.style.color = 'red';
        } else {
            result.innerText = 'It ended in a tie...';
            result.style.fontSize = '25px';
            result.style.color = 'grey';
        }

        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex';
        reloadBtn.addEventListener('click', function() {
            window.location.reload();
        });
    }

    playGame();

}

game();