'use strict';

const counterDisplay = document.querySelector('.counter');
const input = document.querySelector('.input__text');
const button = document.querySelector('.input__button');
const clue = document.querySelector('.input__clue');
const reset = document.querySelector('.play__button');
const guess = document.querySelector('.guess__button');
const guessText = document.querySelector('.guess__text');
const label = document.querySelector('.input__label');
const popup = document.querySelector('.popup');
const popupButton = document.querySelector('.start__button');
const nameInput = document.querySelector('.input__name');
const popupCloseButton = document.querySelector('.close__button');
const listNumber = document.querySelector('.list__number')

let numberArray = [];
let counter = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

let myRandomNumber = getRandomNumber(100);

function writeArray(){
  let content = '';
  for (let i = 0; i < numberArray.length; i++){
    if (isNaN(numberArray[i])=== true){
      if (numberArray.length === 1){
        listNumber.innerHTML = content;
      }
      else {
        listNumber.innerHTML =  `<p class="list__title">Los numeros introducidos son:</p> ${content}`;
      }
    }
    else if (numberArray.length === 1){
      content += `
      <li class="list__item list__item${i} complete">
        ${numberArray[i]}
      </li>
      `  
      listNumber.innerHTML = `<p class="list__title">El numero introducido es:</p> ${content}`;
    }
    else{
      content += `
      <li class="list__item list__item${i} complete">
        ${numberArray[i]}
      </li> 
      `
      listNumber.innerHTML = `<p class="list__title">Los numeros introducidos son:</p> ${content}`;
    }
  }
}


function playWithNumber(event) {
  let myInputNumber = parseInt(input.value);

  if (isNaN(myInputNumber) === true) {
    clue.innerHTML =
    '¡Tienes que introducir un numero del 0 al 100 para jugar! 😃';
    numberArray.push(myInputNumber);
    numberArray.pop(myInputNumber);
  } else if (myInputNumber < 0 || myInputNumber > 100) {
    clue.innerHTML =
    'Tienes que introducir un número entre 0 y 100 --> No hagas trampa 🙃';
    numberArray.push(myInputNumber);
  } else if (myInputNumber === myRandomNumber) {
    if (counter === 1) {
      clue.innerHTML = `🎉🎉 ¡Enhorabuena, ${name}! 🎉🎉</br> Lo has conseguido en ${counter} intento`;
    } else {
      clue.innerHTML = `🎉🎉 ¡Enhorabuena, ${name}! 🎉🎉 </br> Lo has conseguido en ${counter} intentos`;
    }
  } else if (myInputNumber > myRandomNumber) {
    clue.innerHTML = '⚠️ Pista: Demasiado alto ⚠️';
    counter++;
    numberArray.push(myInputNumber);
  } else {
    clue.innerHTML = '⚠️ Pista: Demasiado bajo ⚠️';
    counter++;
    numberArray.push(myInputNumber);
  }
  
  counterDisplay.innerHTML = counter;
  
  writeArray();
}

function playAgain() {
  myRandomNumber = getRandomNumber(100);
  counter = 0;
  input.value = '';
  counterDisplay.innerHTML = counter;
  clue.innerHTML = 'Escribe un número y dale a prueba';
  guessText.innerHTML = '';
  popup.classList.remove('hidden');
  nameInput.value = '';
  numberArray = [];
  listNumber.innerHTML = '';
}

function seeNumber() {
  guessText.innerHTML = `El número es ${myRandomNumber}`;
  clue.innerHTML = '¡Vuelve a empezar!';
}

let name = nameInput.value;

function hidePopup(event) {
  const parentA = event.currentTarget.parentElement;
  parentA.classList.add('hidden');
  name = nameInput.value;
  if (name === '') {
    label.innerHTML = `Hola, introduce aquí tu número:`;
  } else {
    label.innerHTML = `Hola ${name}, introduce aquí tu número:`;
  }
}

popupCloseButton.addEventListener('click', hidePopup);
popupButton.addEventListener('click', hidePopup);
nameInput.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    popupButton.click();
  }
});

button.addEventListener('click', playWithNumber);
reset.addEventListener('click', playAgain);
guess.addEventListener('click', seeNumber);
input.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    button.click();
  }
});
