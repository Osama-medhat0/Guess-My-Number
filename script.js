"use strict";


let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 2;
let highscore = 0;
console.log(secretNumber);

const messageFunction = function (message) {
  document.querySelector(".message").textContent = message;
};

const numberFunction = function (number) {
  document.querySelector(".number").textContent = number;
};

numberFunction("?");

// Again func
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = 20;

  document.querySelector(".check").textContent = "Check!";

  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(`Score = ${score} and secretNumber= ${secretNumber}`);

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = null;
  messageFunction("Start guessing...");

  document.querySelector(".check").disabled = false;
});

//Check func
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);


  if (!guess) {
    messageFunction("Eneter a number!!");
  } else if (guess === secretNumber) {
    messageFunction("Correct Number 🎉🎉");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").style.backgroundColor = "#eee";
    numberFunction(secretNumber);

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector(".check").disabled = true;

    if (highscore < score) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (score > 0) {
    messageFunction(guess > secretNumber ? "Try lower 🔻" : "Try Higher🔺");
    --score;
    document.querySelector(".score").textContent = score;
  }

  if (score === 0) {
    document.querySelector("body").style.backgroundColor = " #ff0000";
    messageFunction("You have lost, buddy 😦😦!!");
  }
});
