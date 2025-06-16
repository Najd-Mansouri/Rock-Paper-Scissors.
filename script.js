console.log('Hello World')

function getComputerChoice() {
    const arr = ['rock', 'paper', 'scissors']
    const randIndex = Math.floor(Math.random() * arr.length)
    return arr[randIndex]
}


const getHumanChoice = () => prompt('Your turn to play: ', '')


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

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)