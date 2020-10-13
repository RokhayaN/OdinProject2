// Our Variables

const winCounter = document.querySelector('div#wins'); 
const lossCounter = document.querySelector('div#losses');
const tieCounter = document.querySelector('div#ties'); 
const scoreBoard = document.querySelector('div#scoreboard');
const resetButton = document.querySelector('button.reset');
const computerPick = document.querySelector('div#computerPick');

let wins = 0;
let losses = 0;
let ties = 0;

tieCounter.textContent = "Ties: " + ties; 
winCounter.textContent = "Wins: " + wins;
lossCounter.textContent = "Losses: " + losses;

//Appends the game status element to the Dom

const gameStatus = document.createElement("div");
scoreBoard.appendChild(gameStatus);
gameStatus.textContent = "Start by making your first pick"

//Add event listener to each player buttons 

const buttons = document.querySelectorAll('button.pick');
buttons.forEach(button => button.addEventListener('click,playRound'));

//add event listener to our reset game button

resetButton.addEventListener('click',resetGame) 

//scoreBoard variations depending on game state 

function gameController(){
        if (wins < 5 && losses < 5){ 
            gameStatus.textContent = "That s a tie,try again!"
            removeEvents();        
    }
    else if (wins === 5){
        gameStatus.textContent = "Yay,you won"
        removeEvents();
    }
    else if (losses === 5){
        gameStatus.textContent = "Oops,you lost"
        removeEvents();
    }
}

// reset our game to t_i

function resetGame(){
    let ties = 0;
    let wins = 0;
    let losses = 0;
tieCounter.textContent = "Ties: " + ties; 
winCounter.textContent = "Wins: " + wins;
lossCounter.textContent = "Losses: " + losses;
buttons.forEach(button => button.addEventListener('click', playRound));
gameStatus.textContent = "Start by making your first pick"
computerPick.textContent = "Computer pick : "

}

//remove event listeners from player choice button after a win or loss

function removeEvents(){
    buttons.forEach(button => button.removeEventListener('click',playRound));
} 

//








 


