console.log('Welcome to the Rock, Paper, Scissors game!')

function getComputerChoice() {
    const arr = ['rock', 'paper', 'scissors']
    const randIndex = Math.floor(Math.random() * arr.length)
    return arr[randIndex]
}


const getHumanChoice = () => prompt('Your turn to play: ', '')



function playGame() {

    
    let humanScore = 0
    let computerScore = 0
    
    const playRound = (humanChoice, computerChoice) => {
        humanChoice = humanChoice.toLowerCase()
        computerChoice = computerChoice.toLowerCase()
    
        if(
            humanChoice === 'rock' && computerChoice === 'scissors' || 
            humanChoice === 'paper' && computerChoice === 'rock' ||
            humanChoice === 'scissors' && computerChoice === 'paper'
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore++
        }else if(computerChoice === humanChoice){
            console.log('Tie')
        }else{
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore++
        }
    }

    


    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
        
    }

    if(humanScore > computerScore){
        console.log(`You Win! You scored ${humanScore} out of 5`)
    }else if(humanScore === computerScore){
        console.log('Tie !!')
    }else {
        console.log('Hard try! Computer wins')
    }
    
}

playGame()