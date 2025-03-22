
function playGame() {
    const choices = ["rock", "paper", "scissors"];
    let userChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    
    if (!choices.includes(userChoice)) {
        console.log("Invalid choice! Please enter rock, paper, or scissors.");
        return;
    }

    let computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(`You chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (userChoice === computerChoice) {
        console.log("It's a tie");
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win!");
    } else {
        console.log("You lose! ");
    }
}

playGame();
