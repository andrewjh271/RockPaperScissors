
function computerPlay(){
  let random = Math.floor(Math.random()*3);
  switch(random){
    case(0):
      return "Rock";
      break;
    case(1):
      return "Paper";
      break;
    default:
      return "Scissors";
  }
}
function playRound(playerSelection, computerSelection){
  switch(playerSelection.toLowerCase()){
    case("rock"):
      return (computerSelection.toLowerCase() == "scissors") ? "You win! Rock beats Scissors!"
            :(computerSelection.toLowerCase() == "paper") ? "You lose! Paper beats Rock!" 
            : "It's a tie!";
      break;
    case("paper"):
      return (computerSelection.toLowerCase() == "rock") ? "You win! Paper beats Rock!"
            :(computerSelection.toLowerCase() == "scissors") ? "You lose! Scissors beats Paper!" 
            : "It's a tie!";
      break;
    case("scissors"):
      return (computerSelection.toLowerCase() == "paper") ? "You win! Scissors beats paper!"
            :(computerSelection.toLowerCase() == "rock") ? "You lose! Rock beats scissors!" 
            : "It's a tie!";
      break;
    default:
      return "Something went wrong.";
  }
}
function game(){
  let i;
  let userScore = 0;
  let computerScore = 0;
  for(i=0; i<5; i++){
    let playerSelection = prompt("Choose Rock, Paper, or Scissors.");
    let result = playRound(playerSelection, computerPlay());
    if(result.indexOf("win") !== -1){
      userScore++;
      console.log(`The user won Round ${i+1}.`)
    }else if(result.indexOf("lose") !== -1){
      computerScore++;
      console.log(`The computer won Round ${i+1}.`)
    }
    else if(result.indexOf("tie") !== -1){
      console.log(`Round ${i+1} was a tie.`);
    }else{
      console.error("Incorrect input.");
      alert("Please try again. Your options are Rock, Paper, or Scissors.");
      i--; //replay this round
    }
  }
  let ties = 5-userScore-computerScore;
  let grammar = (ties != 1) ? "games" : "game";
  if(userScore>computerScore){
    console.log(`The user wins ${userScore} to ${computerScore}, with ${ties} tied ${grammar}!`);
  }else if(computerScore>userScore){
    console.log(`The computer wins ${computerScore} to ${userScore}, with ${ties} tied ${grammar}!`);
  }else{
    console.log(`It's a tie! Both players had a score of ${userScore}, with ${ties} tied ${grammar}!`);
  }
}
game();