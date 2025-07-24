let userscore = 0;
let compscore = 0;


const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");

const compScorepara=document.querySelector("#comp-score");






const choices = document.querySelectorAll(".choice");



const genCompChoice = () => {

    const options = ["rock", "paper", "siccor"];
    // to get a number less than 3 we need to multiply with 3 so that 0,1,2 will be obtained.

    // math.floor is used to remove decimal portion.

    const randIx = Math.floor(Math.random() * 3);
    return options[randIx];

}
const playgame = (userchoice) => {

    console.log("userchoice is", userchoice);
    // generate compute choice::
    const compChoice = genCompChoice();
    console.log("comp choice is", compChoice);


    if (userchoice === compChoice) {
        //draw condition::

        drawGame();
    }

    else {
        let userWin = true;
        if (userchoice === "rock") 
            {
            //siccor,paper
            userWin = compChoice === "paper" ? false : true;

        }
        else if(userchoice === "paper")
        {//rock,siccors
            userWin = compChoice === "scissors" ? false : true;


          }

        else
             {
    //rock,paper
    userWin = compChoice === "rock" ? false : true;

}

showWinner(userWin,userchoice,compChoice);

        }

       }


const showWinner = (userWin,userchoice,compchoice) => {

    if (userWin)
    {
       
     userscore++;
     console.log(userscore)
userScorepara.innerText=userscore;

    msg.innerText=`You win ! Your ${userchoice} beats ${compchoice}`
    msg.style.backgroundColor="green";
    }

    else {
        compscore++;
        console.log(compscore);
        compScorepara.innerText=compscore;
                msg.innerText=` You Lose!${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }

}

const drawGame = () => {
    console.log("game is draw");

    msg.innerText="Game was Draw. Play Again";
    msg.style.backgroundColor="081b31";


}

choices.forEach((choice) => {


    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");

        playgame(userchoice);


    })


})

