let numOfPlayers = 2;

const numOfLottoNumbers = 6;
const arrOfNumbers = [0, 0, 0, 0, 0, 0];
const balls = {};

const mainElement = document.querySelector("#main-element");

//build the input of each user
const players = [];

for (let user = 1; user <= numOfPlayers; user++) {
  //object to follow data
  const player = {
    playerNumber: user,
  };
  player.balls = Array.from("0".repeat(numOfLottoNumbers)).map((el) => 0);
  players.push(player);

  //the base element
  const userElement = document.createElement("div");
  userElement.className = "user";

  //the title
  const titleForUser = document.createElement("span");
  titleForUser.className = "user-selected-numbers-title";
  titleForUser.innerText = `Player ${user} numbers:`;

  //the inputs
  const inputsWrapper = document.createElement("div");
  inputsWrapper.className = "inputs";

  //button to genereate random number
  const randNumButton = document.createElement("button");
  randNumButton.innerText = "Random";
  randNumButton.onclick = () => {
    const numbers = generateLottoNumbers();

    for (let i = 0; i < numbers.length; i++) {
      const input = document.querySelector(`#ball-${user}-${i}`);
      input.value = numbers[i];

      players[user - 1].balls = numbers;
    }
  };

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
  inputsWrapper.appendChild(randNumButton);

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

//button to start lotto
const buttonToStartLotto = document.createElement("button");
buttonToStartLotto.innerText = "START LOTTO";
buttonToStartLotto.onclick = () => startLotto();

function startLotto() {
  let counter = 0;
  let winner = null;

  while (true) {
    const lottoNumbers = generateLottoNumbers();

    for (player of players) {
      const isEqual = player.balls.every((el) => lottoNumbers.includes(el));
      if (isEqual) {
        winner = player;
        break;
      }
    }

    if (winner !== null) break;

    counter++;
  }
  console.log(counter);
  console.log(winner);
  //something with the winner
}

function generateLottoNumbers() {
  //generate lotto numbers
  const lottoNumbers = [];
  while (lottoNumbers.length < numOfLottoNumbers) {
    const num = Math.floor(Math.random() * 37 + 1);
    if (!lottoNumbers.includes(num)) lottoNumbers.push(num);
  }
  return lottoNumbers;
}
