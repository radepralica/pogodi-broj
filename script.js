'use strict';
const secretNumber = document.getElementById('secretNumber');
const guessNumber = document.getElementById('guessNumber');
const message = document.getElementById('message');
let score = document.getElementById('score');
const highScore = document.getElementById('highScore');
const btnAgain = document.getElementById('again');
const btnCheck = document.getElementById('check');

let rez = 20;
let randomNumber = Math.trunc(Math.random() * 20) + 1;
secretNumber.textContent = '?';
btnCheck.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(randomNumber);
  pogodi();
});
function pogodi() {
  if (guessNumber.value === '') {
    alert('Upišite broj');
  } else if (guessNumber.value > randomNumber) {
    score.textContent = --rez;
    message.textContent = 'Broj je Manji';
  } else if (guessNumber.value < randomNumber) {
    message.textContent = 'Broj je Veći';
    score.textContent = --rez;
  } else {
    message.textContent = 'Pogodili ste broj';
    secretNumber.textContent = guessNumber.value;
    document.body.style.backgroundColor = 'green';
    if (score.textContent > highScore.textContent) {
      highScore.textContent = score.textContent;
    }
    btnCheck.disabled = true;
  }
}

btnAgain.addEventListener('click', function (e) {
  e.preventDefault();
  again();
});

function again() {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNumber);
  score.textContent = '20';
  rez = 20;
  guessNumber.value = '';
  btnCheck.disabled = false;
  document.body.style.backgroundColor = 'black';
  secretNumber.textContent = '?';
}
