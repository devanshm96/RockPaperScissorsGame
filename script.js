// let rockEl = document.getElementById("rock");
// let paperEl = document.getElementById("paper");
// let scissorEl = document.getElementById("scissor");

const buttons = document.querySelectorAll("button");

const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("uScore");
const computerScoreEl = document.getElementById("cScore");

let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    const choices = ["rock","paper","scissors"];
    let randomChoice = Math.floor(Math.random()*choices.length);
    return choices[randomChoice];
} 

function playRound(playerSelection,computerSelection){
    if(playerSelection===computerSelection){
        return "It's a tie!";
    }else if(
        (playerSelection==="rock" &&computerSelection==="scissors")||
        (playerSelection==="paper" &&computerSelection==="rock")||
        (playerSelection==="scissors" &&computerSelection==="paper")
    ){
        playerScore++;
        playerScoreEl.textContent = playerScore; 
        return "You win! "+ playerSelection + " beats " + computerSelection;
    } else{
        computerScore++;
        computerScoreEl.textContent = computerScore; 
        return "You lose! "+ computerSelection + 
        " beats " + playerSelection;
    }
}
buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        // console.log("user choice!",button.id,"computer choice!",computerPlay());
        const result = playRound(button.id,computerPlay());
        // console.log(result);
        resultEl.textContent=result;
    });
}); 

// rockEl.addEventListener('click',()={
//     userChoice === "rock";
// });
// paperEl.addEventListener('click',rps);
// scissorEl.addEventListener('click',rps);