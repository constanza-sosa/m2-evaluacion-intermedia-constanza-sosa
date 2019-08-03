'use strict';

const counterDisplay = document.querySelector('.counter');
const input = document.querySelector('.input__text');
const button = document.querySelector('.input__button');
const clue = document.querySelector('.input__clue');
const reset = document.querySelector('.play__button');
const guess = document.querySelector('.guess__button');
const guessText = document.querySelector('.guess_text');
const label = document.querySelector('.input__label');
const popup = document.querySelector('.popup');
const nameInput = document.querySelector('.input__name');

let name = nameInput.value

if (name !== null){
label.innerHTML = `Hola ${name}, introduce aquí tu número:`;
} 
else{
  label.innerHTML = `Hola, introduce aquí tu número:`;
}


let counter = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

let myRandomNumber = getRandomNumber(100);
console.log(`Mi número aleatorio es ${myRandomNumber}`);

function playWithNumber(event){
  let myInputNumber = parseInt(input.value);
  console.log(`Mi número introducido es ${myInputNumber}`);
  
  if (isNaN(myInputNumber) === true ){
    clue.innerHTML = '¡Tienes que introducir un numero del 0 al 100 para jugar! 😃';
  }
  else if (myInputNumber < 0 || myInputNumber > 100){
    clue.innerHTML = 'Tienes que introducir un número entre 0 y 100 --> No hagas trampa';
  }
  else if (myInputNumber === myRandomNumber){
    if (counter === 1){
      clue.innerHTML = `¡Enhorabuena, ${name}! </br> Lo has conseguido en ${counter} intento`;
    } 
    else {
    clue.innerHTML = `¡Enhorabuena, ${name}! </br> Lo has conseguido en ${counter} intentos`;
    }
  }
  else if (myInputNumber > myRandomNumber){
    clue.innerHTML = 'Demasiado alto';
    counter ++;
  } 
  else{
    clue.innerHTML = 'Demasiado bajo';
    counter ++;
  }

  counterDisplay.innerHTML = counter;

}

function playAgain(){
  myRandomNumber = getRandomNumber(100);
  console.log(`Mi número aleatorio es ${myRandomNumber}`);
  counter = 0;
  input.value = '';
  counterDisplay.innerHTML = counter;
  clue.innerHTML = 'Escribe un número y dale a prueba';
  guessText.innerHTML = '';
  name = prompt('¿Cómo te llamas?');
  label.innerHTML = `Hola ${name}, introduce aquí tu número:`;
}

function seeNumber(){
  guessText.innerHTML = `El número es ${myRandomNumber}`;
  clue.innerHTML = '¡Vuelve a empezar!';
}

function hidePopup(){
  popup.classList.add('hidden');
}

nameInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    popup.click();
  }
});
popup.addEventListener('change', hidePopup);
button.addEventListener('click', playWithNumber);
reset.addEventListener('click', playAgain);
guess.addEventListener('click', seeNumber);
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    button.click();
  }
});
