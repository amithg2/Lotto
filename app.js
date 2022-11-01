const numOfLottoNumbers = 6;
const arrOfNumbers = [0, 0, 0, 0, 0, 0];
const balls = {};
const numbers = document.querySelector("#selected-numbers");

const numChanged = (num, idx) => {
  arrOfNumbers.splice(idx - 1, 1, +num);
  numbers.innerHTML = arrOfNumbers;
};

for (let i = 1; i <= numOfLottoNumbers; i++) {
  balls[`ball${i}`] = document.querySelector(`#ball${i}`);
  balls[`ball${i}`].addEventListener("change", (e) =>
    numChanged(e.target.value, i)
  );
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

function startLotto() {
  let counter = 0;

  while (true) {
    const lottoNumbers = generateLottoNumbers();

    const isEqual = lottoNumbers.every((el) => arrOfNumbers.includes(el));
    if (isEqual) {
      break;
    }
    counter++;
  }
  
}
