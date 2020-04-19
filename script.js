function computerPlay() {
  let number = Math.floor(Math.random()*3);
  return (number == 0) ? 'rock' : (number == 1) ? 'paper' : 'scissors';
}

function playRound(playerSelection, computerSelection) {
  if(roundNumber==0) {
    instructions.remove();
    currentRound.appendChild(userImage);
    vs.textContent = "VS";
    currentRound.appendChild(vs);
    currentRound.appendChild(computerImage);
    userPoint.forEach(item => {
      item.classList.add('far');
      item.classList.remove('fas');
    })
    computerPoint.forEach(item => {
      item.classList.add('far');
      item.classList.remove('fas');
    })
  }
  roundNumber++;

  userImage.src = `./${playerSelection}.png`;
  computerImage.src = `./${computerSelection}.png`;

  switch(playerSelection){
    case('rock'):
      (computerSelection == 'scissors') ? game("You win! Rock beats Scissors!")
      :(computerSelection == 'paper') ? game("You lose! Paper beats Rock!") 
      : game("It's a tie!");
      break;
    case('paper'):
      (computerSelection == 'rock') ? game("You win! Paper beats Rock!")
      :(computerSelection == 'scissors') ? game("You lose! Scissors beats Paper!") 
      : game("It's a tie!");
      break;
    case('scissors'):
      (computerSelection == 'paper') ? game("You win! Scissors beats paper!")
      :(computerSelection == 'rock') ? game("You lose! Rock beats scissors!") 
      : game("It's a tie!");
      break;
    default:
      console.error("playerSelection did not equal 'rock' 'paper' or 'scissors'");
  }
}

function game(roundResult) {
  const roundDescription = document.querySelector('#round-description');
  roundDescription.textContent = `Round ${roundNumber}: ${roundResult}`
  userImage.style.border = '4px solid transparent';
  computerImage.style.border = '4px solid transparent';
  
  if(roundResult.indexOf("win") !== -1){
    userScore++;
    userImage.style.border = '4px solid red';
    userPoint[userScore-1].classList.add('fas'); //solid circle
    userPoint[userScore-1].classList.remove('far'); //circle outline
  }else if(roundResult.indexOf("lose") !== -1){
    computerScore++;
    computerImage.style.border = '4px solid red';
    computerPoint[computerScore-1].classList.add('fas');
    computerPoint[computerScore-1].classList.remove('far');
  }
  else if(roundResult.indexOf("tie") !== -1){
    //do nothing
  }else{
    console.error("Incorrect input");
  }
  
  if(userScore==5 || computerScore==5) {
    window.removeEventListener('click', respondToClick);
    rockButton.classList.remove('button-action');
    paperButton.classList.remove('button-action');
    scissorsButton.classList.remove('button-action');
    let delayInMilliseconds = 3000; // 3 seconds
    setTimeout(function() { //temporarily disables buttons
      if(userScore==5) instructions.textContent = "You won the match! Make your choice to play again...";
      if(computerScore==5) instructions.textContent = "You lost the match. Make your choice to play again...";
      roundNumber = 0;
      userScore = 0;
      computerScore = 0;
      currentRound.appendChild(instructions);
      currentRound.removeChild(userImage);
      currentRound.removeChild(vs);
      currentRound.removeChild(computerImage);
      roundDescription.textContent = "";
      window.addEventListener('click', respondToClick);
      rockButton.classList.add('button-action');
      paperButton.classList.add('button-action');
      scissorsButton.classList.add('button-action');
    }, delayInMilliseconds);
  }
}

const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');

const userPoint = [];
userPoint[0] = document.querySelector('#user-point1');
userPoint[1] = document.querySelector('#user-point2');
userPoint[2] = document.querySelector('#user-point3');
userPoint[3] = document.querySelector('#user-point4');
userPoint[4] = document.querySelector('#user-point5');
const computerPoint = [];
computerPoint[0] = document.querySelector('#computer-point1');
computerPoint[1] = document.querySelector('#computer-point2');
computerPoint[2] = document.querySelector('#computer-point3');
computerPoint[3] = document.querySelector('#computer-point4');
computerPoint[4] = document.querySelector('#computer-point5');

let roundNumber = 0;
let userScore = 0;
let computerScore = 0;

let currentRound = document.querySelector('#current-round');
let instructions = document.querySelector('#instructions');
let userImage = document.createElement('img');
userImage.classList.add('round-images');
let computerImage = document.createElement('img');
computerImage.classList.add('round-images');
let vs = document.createElement('span');
vs.setAttribute('id', 'vs');

const roundDescription = document.querySelector('#round-description');

window.addEventListener('click', respondToClick);
function respondToClick(e) {
  const playerSelection = e.target.dataset.choice;
  const computerSelection = computerPlay();

  if(!playerSelection) return; //User clicked somewhere else

  playRound(playerSelection, computerSelection);
}

/* rockButton.onclick = function(){playRound(0, computerPlay())};
paperButton.onclick = function(){playRound(1, computerPlay())};
scissorsButton.onclick = function(){playRound(2, computerPlay())};
I am leaving this here because it is the solution I came up with first, and I think
it's simple and elegant. However, since it's an unnamed function, I can't remove
the event temporarily after the match is over. The method with window.addEventListener
seems better since I don't have to create a function for each button. */
