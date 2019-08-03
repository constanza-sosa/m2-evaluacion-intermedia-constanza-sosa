'use strict';

const counterDisplay = document.querySelector('.counter');
const input = document.querySelector('.input__text');
const button = document.querySelector('.input__button');
const clue = document.querySelector('.input__clue');
const reset = document.querySelector('.play__button');
const guess = document.querySelector('.guess__button');
const guessText = document.querySelector('.guess_text');



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
    clue.innerHTML = '¡Tienes que introducir un numero del 0 al 100 para jugar¡😃';
  }
  else if (myInputNumber < 0 || myInputNumber > 100){
    clue.innerHTML = 'Tienes que introducir un número entre 0 y 100 --> No hagas trampa';
  }
  else if (myInputNumber === myRandomNumber){
    clue.innerHTML = '¡HAS GANADO, CAMPEONA!';
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
}

function seeNumber(){
  guessText.innerHTML = `El número es ${myRandomNumber}`;
}


button.addEventListener('click', playWithNumber);
reset.addEventListener('click', playAgain);
guess.addEventListener('click', seeNumber);
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    button.click();
  }
});
