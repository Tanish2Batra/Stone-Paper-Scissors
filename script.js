let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

const genComputerChoice = ()=>{
    //rock, paper, scissors
    const options = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
}

const drawGame = ()=>{
    msg.innerText = "Game was Draw! Play again."
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,computerChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice)=>{
    console.log("User choice = ",userChoice);
    //Generate Computer choice
    const computerChoice = genComputerChoice();
    console.log("Computer choice = ",computerChoice); 

    if(userChoice === computerChoice){
        //Draw
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper, scissors
            userWin = computerChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //scissors, rock
            userWin = computerChoice === "scissors" ? false : true;
        }else{
            //rock, paper
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
