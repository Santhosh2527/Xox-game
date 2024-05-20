
let cells = document.querySelectorAll('[data-cell]');
let display = document.getElementById('check');
let audio = document.getElementById('myAudio');

let PLAYER_X = 'X';
let PLAYER_O = 'O';
let currentPlayer = Math.random() > 0.5 ? PLAYER_X : PLAYER_O;
let gameActive = true;
let winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function boxClick(event) {
    let cell = event.target;
    if (!gameActive || cell.textContent !== '') return;

    cell.textContent = currentPlayer;
    if (checkWinner(currentPlayer)) {
        gameActive = false;
        display.textContent = `Player ${currentPlayer} wins!`;
        audio.play();
    } else if ([...cells].every(cell => cell.textContent !== '')) {
        gameActive = false;
        display.textContent = 'Draw!';
    } else {
        currentPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
        display.textContent = `It's ${currentPlayer}'s turn`;
    }
}

function checkWinner(player) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].textContent === player;
        });
    });
}

 let Restart=document.querySelector('#Restart');
 Restart.addEventListener('click',()=>{
   cells[0].textContent ="";
   cells[1].textContent ="";
   cells[2].textContent ="";
   cells[3].textContent ="";
   cells[4].textContent ="";
   cells[5].textContent ="";
   cells[6].textContent ="";
   cells[7].textContent ="";
   cells[8].textContent ="";
   display.textContent = "Play now";

 }
 )

// function restartGame() {
  

// }

cells.forEach(cell => cell.addEventListener('click', boxClick));
restartButton.addEventListener('click', restartGame);






