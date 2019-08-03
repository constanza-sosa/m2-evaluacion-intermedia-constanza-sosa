'use strict';

const counterDisplay = document.querySelector('.counter');
const input = document.querySelector('.input__text');
const button = document.querySelector('.input__button');
const clue = document.querySelector('.input__clue');

// let counter = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const myRandomNumber = getRandomNumber(100);
console.log(`Mi número aleatorio es ${myRandomNumber}`);

function playWithNumber(event){
  let myInputNumber = parseInt(input.value);
  console.log(`Mi número introducido es ${myInputNumber}`);

  if (myInputNumber === myRandomNumber){
    clue.innerHTML = '¡HAS GANADO, CAMPEONA!';
  }
  else if (myInputNumber > myRandomNumber){
    clue.innerHTML = 'Demasiado alto';
  } 
  else{
    clue.innerHTML = 'Demasiado bajo';
  }

  if (myInputNumber < 0 || myInputNumber > 100){
    clue.innerHTML = 'Tienes que introducir un número entre 0 y 100 --> No hagas trampa';
  }

  counterDisplay.innerHTML = counter;

}


button.addEventListener('click', playWithNumber);