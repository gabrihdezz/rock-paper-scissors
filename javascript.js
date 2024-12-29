function getComputerChoice() {
    let randNumber = Math.floor(Math.random() * 3);
    if (randNumber == 0) {
        return "Rock";
    } else if (randNumber == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    return prompt("Choose an option: rock, paper or scissors");
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    let computerChoice;
    let humanChoice;

    function playRound(computerChoice, humanChoice) {
        
    
        if (humanChoice === computerChoice) {
            alert("Tie");
        } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
            humanScore += 1;
            alert(`You win! ${humanChoice} beats ${computerChoice}`);
        } else if (humanChoice === "Paper" && computerChoice === "Rock") {
            humanScore += 1;
            alert(`You win! ${humanChoice} beats ${computerChoice}`);
        } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            humanScore += 1;
            alert(`You win! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore += 1;
            alert(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
    }

    
    let keepGoing = true;
    let rounds = 0;

    while (keepGoing) {
        rounds += 1;
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();

        playRound(computerChoice, humanChoice);

        if (humanScore === 3 || computerScore === 3 || rounds === 5) {
            keepGoing = false;
            alert(`Game finished. Your score: ${humanScore}. Computer's score: ${computerScore}`)
        }
    }
}

playGame();