let [compScore, userScore] = [0, 0];
let play = 0;

let result = document.querySelector(".result");
let choices = {
  rock: {
    rock: "draw",
    scissors: "win",
    paper: "lose",
  },
  paper: {
    rock: "win",
    scissors: "win",
    paper: "draw",
  },
  scissors: {
    rock: "win",
    scissors: "draw",
    paper: "lose",
  },
};
let user = document.querySelector(".username");
document
  .querySelector(".start")
  .addEventListener("click", function want(event) {
    event.preventDefault();
    document.querySelector(".score-one").innerHTML = 0;
    document.querySelector(".score-two").innerHTML = 0;
    userScore = 0;
    play = 0;
    let userName = user.value;
    if (userName === "") alert("Please Enter a Username");
  });
function checker(input) {
  let userChoice = ["rock", "paper", "scissors"];
  let compChoice = Math.floor(Math.random() * userChoice.length);
  document.querySelector(
    ".comp-choice"
  ).innerHTML = ` I chose <span> ${userChoice[
    compChoice
  ].toUpperCase()}</span>`;

  document.querySelector(
    ".user-choice"
  ).innerHTML = ` Your Choice is <span> ${input.toUpperCase()}</span>`;
  let userName = user.value;
  let computersChoice = userChoice[compChoice];
  switch (choices[input][computersChoice]) {
    case "win":
      result.style.cssText =
        "background: #cefdce; color: #689f38; padding: 10px; width: 150px;; margin: 10px auto";
      result.innerHTML = `${userName}`  + '' + "Wins";
      userScore++;
      break;
    case "lose":
      result.style.cssText =
        "background: #ffdde0; color: #d32f2f; padding: 10px; width: 150px; margin: 10px auto";
      result.innerHTML = "I Won";
      compScore++;
      break;
    default:
      result.style.cssText =
        "background: #e5e5e5; color: #000000; padding: 10px; width: 150px; margin: 10px auto";
      result.innerHTML = "Its a Tie";
      break;
  }
  document.querySelector(".score-one").innerHTML = userScore;
  document.querySelector(".score-two").innerHTML = compScore;
  if (userName === "") {
    alert("Please Enter a Username");
    document.querySelector(".score-one").innerHTML = 0;
    document.querySelector(".score-two").innerHTML = 0;
    result.innerHTML = "";
    document.querySelector(".comp-choice").innerHTML = "";
    document.querySelector(".user-choice").innerHTML = "";
  } else {
    start();
    play++;
  }
  if (play === 10) {
    gameOver();
    begin();
  } else if (play > 10) {
    alert("start again");
  }
}
