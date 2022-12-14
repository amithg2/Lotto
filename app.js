let numOfPlayers = 2;
let numOfLottoNumbers = 6;
const players = [];

const body = document.querySelector("body");
const settings = document.querySelector("#settings-wrapper");

//bind the selectors to the varibles
const numOfPlayerSelector = document.querySelector("#num-of-playeres");
numOfPlayerSelector.value = 2;
numOfPlayerSelector.onchange = (e) => (numOfPlayers = e.target.value);

const numOfLottoNumbersSelector = document.querySelector("#num-of-balls");
numOfLottoNumbersSelector.value = 6;
numOfLottoNumbersSelector.onchange = (e) =>
  (numOfLottoNumbers = e.target.value);

//==============================================================
//==================HELP FUNCTIONS==============================
//==============================================================
const numChanged = (userNumber, num, idx) => {
  players[userNumber - 1].balls = players[userNumber - 1].balls.map((el, i) => {
    if (i !== idx) return el;
    return +num;
  });

  checkIfStartButtonDisabled();
};

//start lotto
function startLotto() {
  let counter = 0;
  const startButton = document.querySelector("#start-button");
  const restartButton = document.querySelector("#restart-button");
  restartButton.className = "button";

  startButton.disabled = true;
  startButton.className = "start-button-disabled";

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

//find duplicates
function findDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) != index);
}

//when input is changed check if this is a vaild lotto
function checkIfStartButtonDisabled() {
  const startButton = document.querySelector("#start-button");
  if (!startButton) return;
  const isSomePlayerBallsNotValid = players.some((player) => {
    // if the number of some ball is not valid
    if (player.balls.some((ball) => ball > 37 || ball < 1)) return true;

    //if there are duplications in the balls
    const duplicates = findDuplicates(player.balls);
    if (duplicates.length) return true;
    return false;
  });

  if (isSomePlayerBallsNotValid) {
    startButton.disabled = true;
    startButton.className = "start-button-disabled";
    return;
  }
  startButton.className = "button";
  startButton.disabled = false;
}

function lottoButtonClicked() {
  const result = startLotto();

  buildWinnerHtml(result);
}

//function to get lotto numbers dependes on the num of lotto numbers  
function generateLottoNumbers() {
  const lottoNumbers = [];
  while (lottoNumbers.length < numOfLottoNumbers) {
    const num = Math.floor(Math.random() * 37 + 1);
    if (!lottoNumbers.includes(num)) lottoNumbers.push(num);
  }
  return lottoNumbers;
}

//==============================================================
//==================HTML BUILDES================================
//==============================================================
//base lotto html
function buildHtmlForLotto() {
  body.removeChild(settings);
  const lottoWrapper = document.createElement("div");
  lottoWrapper.id = "lotto-wrapper";
  lottoWrapper.className = "card";

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
    randNumButton.classList.add("button");
    randNumButton.classList.add("random-button");
    randNumButton.onclick = () => {
      const numbers = generateLottoNumbers();

      for (let i = 0; i < numbers.length; i++) {
        const input = document.querySelector(`#ball-${user}-${i}`);
        input.value = numbers[i];

        players[user - 1].balls = numbers;
      }
      checkIfStartButtonDisabled();
    };

    //build input for each number 
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
    lottoWrapper.appendChild(userElement);
  }

  //start and restart buttons wrapper
  const buttonsWrapper = document.createElement("div");
  buttonsWrapper.className = "buttons-wrapper";

  //button to start lotto
  const buttonToStartLotto = document.createElement("button");
  buttonToStartLotto.innerText = "START LOTTO";
  buttonToStartLotto.className = "start-button-disabled";
  buttonToStartLotto.id = "start-button";
  buttonToStartLotto.disabled = true;

  buttonToStartLotto.onclick = () => lottoButtonClicked();

  //button to restart lotto
  const buttonToRestartLotto = document.createElement("button");
  buttonToRestartLotto.innerText = "RESTART";
  buttonToRestartLotto.id = "restart-button";
  buttonToRestartLotto.classList.add("button");
  buttonToRestartLotto.classList.add("restart-button");
  buttonToRestartLotto.onclick = () => {
    players.length = 0;
    const winner = document.querySelector("#winner-wrapper");
    if (winner) lottoWrapper.removeChild(winner);
    body.removeChild(lottoWrapper);
    body.appendChild(settings);
  };

  buttonsWrapper.appendChild(buttonToStartLotto);
  buttonsWrapper.appendChild(buttonToRestartLotto);

  lottoWrapper.appendChild(buttonsWrapper);

  body.appendChild(lottoWrapper);
}

//show winner 
function buildWinnerHtml(result) {
  const winnerWrraper = document.createElement("div");
  winnerWrraper.className = "winner-wrapper";
  winnerWrraper.id = "winner-wrapper";
  const lottoWrapper = document.querySelector("#lotto-wrapper");

  const winnerPlayer = document.createElement("h3");
  const lottoRoundsCounter = document.createElement("span");

  winnerPlayer.innerText = `The winner is player ${result.player.playerNumber}!`;

  winnerWrraper.appendChild(winnerPlayer);
  winnerWrraper.appendChild(lottoRoundsCounter);
  lottoWrapper.appendChild(winnerWrraper);

  for (let i = 0; i <= result.counter; i++) {
    setTimeout(
      () => {
        lottoRoundsCounter.innerHTML = `It took ${i} lotto rounds to find a winner!`;
      },
      result.counter > 1000000 ? 1 : 2
    );
  }
}
