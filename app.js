let numOfPlayers = 2;
let numOfLottoNumbers = 6;
const players = [];

const body = document.querySelector("body");
const settings = document.querySelector("#settings-wrapper");
const lottoRoundsCounter = document.createElement("span");

const numOfPlayerSelector = document.querySelector("#num-of-playeres");
numOfPlayerSelector.value = 2;
numOfPlayerSelector.onchange = (e) => (numOfPlayers = e.target.value);

const numOfLottoNumbersSelector = document.querySelector("#num-of-balls");
numOfLottoNumbersSelector.value = 6;
numOfLottoNumbersSelector.onchange = (e) =>
  (numOfLottoNumbers = e.target.value);

function buildHtmlForLotto() {
  body.removeChild(settings);
  const lottoWrapper = document.createElement("div");
  lottoWrapper.id = "lotto-wrapper";
  //build the input of each user
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
    //build the html
    inputsWrapper.appendChild(randNumButton);
    userElement.appendChild(titleForUser);
    userElement.appendChild(inputsWrapper);
    lottoWrapper.appendChild(userElement);
    lottoWrapper.prepend(lottoRoundsCounter);
  }

  //button to start lotto
  const buttonToStartLotto = document.createElement("button");
  buttonToStartLotto.innerText = "START LOTTO";
  buttonToStartLotto.onclick = () => lottoButtonClicked();

  //button to restart lotto
  const buttonToRestartLotto = document.createElement("button");
  buttonToRestartLotto.innerText = "RESTART";
  buttonToRestartLotto.onclick = () => {
    body.removeChild(lottoWrapper);
    body.appendChild(settings);
  };

  lottoWrapper.appendChild(buttonToStartLotto);
  lottoWrapper.appendChild(buttonToRestartLotto);

  body.appendChild(lottoWrapper);
}

const numChanged = (userNumber, num, idx) => {
  players[userNumber - 1].balls = players[userNumber - 1].balls.map((el, i) => {
    if (i !== idx) return el;
    return +num;
  });
};

function startLotto() {
  let counter = 0;

  while (true) {
    const lottoNumbers = generateLottoNumbers();
    for (player of players) {
      const isEqual = player.balls.every((el) => lottoNumbers.includes(el));
      if (isEqual) {
        return { player, counter };
      }
    }
    counter++;
  }
}

function lottoButtonClicked() {
  const result = startLotto();

  for (let i = 0; i <= result.counter; i++) {
    setTimeout(() => {
      lottoRoundsCounter.innerHTML = i;
    }, 2);
  }

  //do something with the winner
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
