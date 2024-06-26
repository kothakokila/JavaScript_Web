const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let u = 0;
let c = 0;

const gencompchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const ridx = Math.floor(Math.random() * 3);
  return options[ridx];
};

const game = (userchoice) => {
  const compchoice = gencompchoice();
  if (userchoice == "rock") {
    if (compchoice == "scissors") {
      win();
    } else if (compchoice == "paper") {
      loose();
    } else {
      draw();
    }
  } else if (userchoice == "paper") {
    if (compchoice == "scissors") {
      loose();
    } else if (compchoice == "rock") {
      win();
    } else {
      draw();
    }
  } else {
    if (compchoice == "rock") {
      loose();
    } else if (compchoice == "paper") {
      win();
    } else {
      draw();
    }
  }
  check();
};

const win = () => {
  u += 1;
  console.log("You Won!");
  console.log("Your score:", u);
};

const loose = () => {
  c += 1;
  console.log("Computer Won!");
  console.log("Computer score:", c);
};

const draw = () => {
  console.log("Draw Game- Play again");
};

const check = () => {
  if (u == 10 || c == 10) {
    if (u == 10) {
      console.log("Game Over- You reached first 10 Start again");
    } else {
      console.log("Game Over- Computer reached first 10 Start again");
    }
    u = 0;
    c = 0;
  }
};

rl.question('Enter your choice (rock, paper, or scissors): ', (answer) => {
  game(answer.toLowerCase());
  rl.close();
});
