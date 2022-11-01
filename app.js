let numOfPlayers = 3;

const numOfLottoNumbers = 6;
const arrOfNumbers = [0, 0, 0, 0, 0, 0];
const balls = {};

const mainElement = document.querySelector("#main-element");

const players = [];
//build the input of each user

for (let user = 1; user <= numOfPlayers; user++) {
  const player = {
    playerNumber: user,
  };
  player.balls = Array.from("0".repeat(numOfLottoNumbers)).map((el) => 0);

  players.push(player);
  //the base element
  const userElement = document.createElement("div");
  userElement.className = "user";
  userElement.id = `user-${user}`;

  //the title
  const titleForUser = document.createElement("span");
  titleForUser.className = "user-selected-numbers-title";
  titleForUser.innerText = `Player ${user} numbers:`;

  //the inputs
  const inputsWrapper = document.createElement("div");
  inputsWrapper.className = "inputs";

  for (let i = 0; i < numOfLottoNumbers; i++) {
    const input = document.createElement("input");
    input.type = "number";
    input.id = `ball-${user}-${i}`;
    input.className = "number-input";
    input.min = 0;
    input.max = 37;
    input.value = 0;
    input.onchange = (e) => numChanged(user, e.target.value, i);

    inputsWrapper.appendChild(input);
  }

  userElement.appendChild(titleForUser);
  userElement.appendChild(inputsWrapper);

  mainElement.appendChild(userElement);
}

const numChanged = (userNumber, num, idx) => {
  players[userNumber - 1].balls = players[userNumber - 1].balls.map((el, i) => {
    if (i !== idx) return el;
    return +num;
  });
};

// for (let i = 1; i <= numOfLottoNumbers; i++) {
//   balls[`ball${i}`] = document.querySelector(`#ball${i}`);
//   balls[`ball${i}`].addEventListener("change", (e) =>
//     numChanged(e.target.value, i)
//   );
// }

// function generateLottoNumbers() {
//   //generate lotto numbers
//   const lottoNumbers = [];
//   while (lottoNumbers.length < numOfLottoNumbers) {
//     const num = Math.floor(Math.random() * 37 + 1);
//     if (!lottoNumbers.includes(num)) lottoNumbers.push(num);
//   }
//   return lottoNumbers;
// }

// function startLotto() {
//   let counter = 0;

//   while (true) {
//     const lottoNumbers = generateLottoNumbers();

//     const isEqual = lottoNumbers.every((el) => arrOfNumbers.includes(el));
//     if (isEqual) {
//       break;
//     }
//     counter++;
//   }
// }
