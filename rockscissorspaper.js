const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();
    //영어 입력시 Rock, rock 똑같이 적용되게 소문자로
    if (userInput === 'rock' || userInput ==='scissors' || userInput === 'paper'){
      return userInput;
    }
    else{
      console.log('Error!');
    }
    
  };
  
  const getComputerChoice = () =>{
    const randomNumber = Math.floor(Math.random()* 3);
    switch (randomNumber){
      case 0:
        return 'rock';
      case 1:
        return 'scissors';
      case 2:
        return 'paper';
    }
  };
  
  const determineWinner = (userChoice,computerChoice) => {
    if (userChoice === computerChoice){
      return 'The game is a tie!';
    }
    else {
      if (userChoice === 'rock'){
        if(computerChoice === 'paper') {
           return 'The computer won!';
        }  else {
           return 'You won!';
        }
      }
      else if (userChoice === 'scissors'){
        if(computerChoice === 'rock') {
          return 'The computer won!';
        } else {
          return 'You won!';
        }
      }
      else{
        if(computerChoice === 'scissors'){
          return 'The computer won!';
        } else {
          return 'You won!';
        }
      }
    }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
  };
  
  playGame();