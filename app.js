let userScore=0;
let computerScore=0;

const choices =document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#User-score");
const compScorePara=document.querySelector("#Computer-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="game was draw.play again";
    msg.style.backgroundColor="black";
}
const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;

        console.log("you win!");
        msg.innerText="you win!";
        msg.style.backgroundColor="green";
    }
    else{
        computerScore++;
        compScorePara.innerText=computerScore;

        console.log("you lose");
        msg.innerText="you lose.";
        msg.style.backgroundColor="red";
    }

}


const playGame=(userChoice)=>{
    console.log("user choice= ",userChoice);
    const compChoice=genCompChoice();
    console.log("Computer choice= ",compChoice);
    if(userChoice===compChoice){
          drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false : true ;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false : true;
        }
        else {
            userWin=compChoice==="rock"?false : true;
        }
        showWinner(userWin);
    }

};  


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});