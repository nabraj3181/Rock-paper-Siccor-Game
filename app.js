let userscore = 0;
let compscore = 0;




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

showWinner(userWin);

        }

       }


const showWinner = (userWin) => {

    if (userWin)
        console.log("you win")
    else {
        console.log("comp win");
    }

}

const drawGame = () => {
    console.log("game is draw");

}

choices.forEach((choice) => {


    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");

        playgame(userchoice);


    })


})

