// Used variables
let userScore = 0;
let compScore = 0;
let bothdrawcount=0;


//  Acessing Html Docs using Dom
const choices = document.querySelectorAll(".choice");
const usertotal = document.getElementById("user-score");
const compTotal = document.getElementById("comp-score");
const bothdraw = document.getElementById("draw");
const ResultMessage = document.getElementById("msg");
let compselect = document.createElement("p");


// Function to generate Random Value from given array of 3's
const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    // rock,paper, scissor
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

// Function in case of draw scenario
const drawscenario = () => {
    bothdrawcount++;
    console.log("Total draws", bothdrawcount);
    bothdraw.innerText = bothdrawcount;
    ResultMessage.innerText = "Match Drawn!";
}


const showWinner = (Userwin) => {
     
    if (Userwin)
    {
        console.log("You win!");
        ResultMessage.innerHTML = "You Won Hurray!"
        userScore++;
        usertotal.innerText = userScore;
    }
    else
    {
        console.log("You Loose!");    
        ResultMessage.innerHTML = "You Lose";
        compScore++;
        compTotal.innerText = compScore;
    }
 }




const playgame = (userChoice) => {
    console.log("user Choice=", userChoice)
    // now computer choice
    const compChoice = genComputerChoice();
    console.log("Computer Choice=", compChoice);
    compselect.innerHTML = "<h2>Computer choose: " + compChoice + "</h2>";
    compselect.classList.add("centered-text");
    document.body.appendChild(compselect);
    if (userChoice === compChoice)
    {
        // draw function call
        drawscenario();
    } else {
        let userwin = true;
        if (userChoice === "rock")
        {
            //  there we know one thing that user did not select rock because if he select the rock , the game should be end in terms of draw result
            // compchoice : paper, scissors
            userwin = compChoice === "paper" ? false : true;
        }
        else if (userChoice==="paper")
        {
            // computerchoice: rock, scissors
            userwin = compChoice === "scissors" ? false : true;

        }
        else
        {
            userwin= compChoice === "rock" ? false : true;
        }
        showWinner(userwin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", (event) => {
        const userChoice = event.target.id;
        // calling playgame
        playgame(userChoice);
    })
})  