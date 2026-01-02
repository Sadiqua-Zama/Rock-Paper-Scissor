let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const userScorepara = document.querySelector('#user-score');
const compScorepara = document.querySelector('#comp-score');

const gencompchoice = () => {
    const options = ['stone', 'paper', 'scissor'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "It's a Draw!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compchoice) => {
    if (userWin) {
        userscore++;
        userScorepara.innerText = userscore;
        msg.innerText = `You Win! ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compScorepara.innerText = compscore;
        msg.innerText = `You Lose! ${compchoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userchoice) => {
    const compchoice = gencompchoice();

    if (userchoice === compchoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userchoice === "rock") {
            //scissor, paper
            userWin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            //rock, scissor
            userWin = compchoice === "scissor" ? false : true;
        } else {
            //paper, rock
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compchoice);
    }
};

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);

    });
});