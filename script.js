function computerPlay() {
  return Math.floor(Math.random()*3); //0=rock; 1=paper; 2=scissors;
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
    case(0)://rock
      (computerSelection == 2) ? game("You win! Rock beats Scissors!")
      :(computerSelection == 1) ? game("You lose! Paper beats Rock!") 
      : game("It's a tie!");
      break;
    case(1)://paper
      (computerSelection == 0) ? game("You win! Paper beats Rock!")
      :(computerSelection == 2) ? game("You lose! Scissors beats Paper!") 
      : game("It's a tie!");
      break;
    case(2)://scissors
      (computerSelection == 1) ? game("You win! Scissors beats paper!")
      :(computerSelection == 0) ? game("You lose! Rock beats scissors!") 
      : game("It's a tie!");
      break;
    default:
      console.error('playerSelection did not equal 0, 1, or 2');
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
    userPoint[userScore-1].classList.add('fas');
    userPoint[userScore-1].classList.remove('far');
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
    if(userScore==5) instructions.textContent = "You win! Make your choice to play again...";
    if(computerScore==5) instructions.textContent = "You lose! Make your choice to play again...";
    roundNumber = 0;
    userScore = 0;
    computerScore = 0;
    currentRound.appendChild(instructions);
    currentRound.removeChild(userImage);
    currentRound.removeChild(vs);
    currentRound.removeChild(computerImage);
    roundDescription.textContent = "";
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

rockButton.onclick = function(){playRound(0, computerPlay())};
paperButton.onclick = function(){playRound(1, computerPlay())};
scissorsButton.onclick = function(){playRound(2, computerPlay())};

const roundDescription = document.querySelector('#round-description');