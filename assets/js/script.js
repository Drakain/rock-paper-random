// The entire game is contained in this function
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;


    // Function to play the game
    function playGame() {
        let rockBtn = document.querySelector('button-rock');
        let paperBtn = document.querySelector('button-paper');
        let scissorsBtn = document.querySelector('button-scissors');
        let humanBtn = document.querySelector('button-human');
        let gunBtn = document.querySelector('button-gun');
        let spongeBtn = document.querySelector('button-sponge');
        let airBtn = document.querySelector('button-air');
        let fireBtn = document.querySelector('button-fire');
        let waterBtn = document.querySelector('button-water');
        let playerOptions = [rockBtn, paperBtn, scissorsBtn, humanBtn, gunBtn, spongeBtn, airBtn, fireBtn, waterBtn];
        let computerOptions = ['rock', 'paper', 'scissors', 'human', 'gun', 'sponge', 'air', 'fire', 'water'];


        // Function to start the game when the player clicks one of the buttons
        playerOptions.forEach(option => {
            option.addEventListener('click', function() {

                let movesLeft = document.querySelector('moves-left');
                moves++;
                movesLeft.innerText = `Moves left: ${10-moves}`;

                let choiceInteger = Math.floor(Math.random()*9);
                let computerChoice = computerOptions[choiceInteger];

                winner(this.innerText, computerChoice);

                if (moves === 10) {
                    gameOver(playerOptions, movesLeft);
                }

            })
        });
    }
}

// Create functions for winner and game over!
