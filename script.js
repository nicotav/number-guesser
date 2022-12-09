let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget(){
    return Math.floor(Math.random()*10,2);
}


function compareGuesses(human, computer, secretTarget){
    let humanGuess = Math.abs(human-secretTarget);
    let computerGuess = Math.abs(computer-secretTarget);

    if(humanGuess>computerGuess){
        return false;
    }

    return true;
}

function updateScore(winner){
    if(winner ==='human'){
        humanScore=humanScore+1;
        return;
    }
    computerScore=computerScore+1;
}

function advanceRound(){
    currentRoundNumber = currentRoundNumber+1;
}