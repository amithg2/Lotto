const numOfLottoNumbers = 6;
const arrOfNumbers = [0, 0, 0, 0, 0, 0];
const balls = {};
const numbers = document.querySelector('#show-numbers')

const numChanged = (num, idx) => {
  arrOfNumbers.splice(idx -1, 1, +num);
  numbers.innerHTML= arrOfNumbers
};

for (let i = 1; i <= numOfLottoNumbers; i++) {
  balls[`ball${i}`] = document.querySelector(`#ball${i}`);
  balls[`ball${i}`].addEventListener("change", (e) =>
    numChanged(e.target.value, i)
  );
}

console.log(balls);
