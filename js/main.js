"use strict";

const counterDisplay = document.querySelector(".counter");
const input = document.querySelector(".input__text");
const button = document.querySelector(".input__button");
const clue = document.querySelector(".input__clue");
const reset = document.querySelector(".play__button");
const guess = document.querySelector(".guess__button");
const guessText = document.querySelector(".guess_text");
const label = document.querySelector(".input__label");
const popup = document.querySelector(".popup");
const popupButton = document.querySelector(".start__button");
const nameInput = document.querySelector(".input__name");
const popupCloseButton = document.querySelector(".close__button");
// const listNumber = document.querySelector('.list__number')

let counter = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

let myRandomNumber = getRandomNumber(100);
console.log(`Mi número aleatorio es ${myRandomNumber}`);

function playWithNumber(event) {
  let myInputNumber = parseInt(input.value);
  console.log(`Mi número introducido es ${myInputNumber}`);
  // const numberArray = [];
  // // content = '';

  // for (let i= 0; i<numberArray; i++){
  //   numberArray.push(myInputNumber);
  //   listNumber.innerHTML += numberArray;
  // }

  if (isNaN(myInputNumber) === true) {
    clue.innerHTML =
      "¡Tienes que introducir un numero del 0 al 100 para jugar! 😃";
  } else if (myInputNumber < 0 || myInputNumber > 100) {
    clue.innerHTML =
      "Tienes que introducir un número entre 0 y 100 --> No hagas trampa";
  } else if (myInputNumber === myRandomNumber) {
    if (counter === 1) {
      clue.innerHTML = `¡Enhorabuena, ${name}! </br> Lo has conseguido en ${counter} intento`;
    } else {
      clue.innerHTML = `¡Enhorabuena, ${name}! </br> Lo has conseguido en ${counter} intentos`;
    }
  } else if (myInputNumber > myRandomNumber) {
    clue.innerHTML = "Demasiado alto";
    counter++;
  } else {
    clue.innerHTML = "Demasiado bajo";
    counter++;
  }

  counterDisplay.innerHTML = counter;
}

function playAgain() {
  myRandomNumber = getRandomNumber(100);
  console.log(`Mi número aleatorio es ${myRandomNumber}`);
  counter = 0;
  input.value = "";
  counterDisplay.innerHTML = counter;
  clue.innerHTML = "Escribe un número y dale a prueba";
  guessText.innerHTML = "";
  popup.classList.remove("hidden");
  nameInput.value = "";
}

function seeNumber() {
  guessText.innerHTML = `El número es ${myRandomNumber}`;
  clue.innerHTML = "¡Vuelve a empezar!";
}

let name = nameInput.value;

function hidePopup(event) {
  const parentA = event.currentTarget.parentElement;
  parentA.classList.add("hidden");
  name = nameInput.value;
  console.log(name);
  if (name === "") {
    label.innerHTML = `Hola, introduce aquí tu número:`;
  } else {
    label.innerHTML = `Hola ${name}, introduce aquí tu número:`;
  }
}

popupCloseButton.addEventListener("click", hidePopup);
popupButton.addEventListener("click", hidePopup);
nameInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    popupButton.click();
  }
});

button.addEventListener("click", playWithNumber);
reset.addEventListener("click", playAgain);
guess.addEventListener("click", seeNumber);
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    button.click();
  }
});
