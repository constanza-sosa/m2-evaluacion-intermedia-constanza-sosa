'use strict';

const counter = document.querySelector('.counter');
const input = document.querySelector('.input__text');
const button = document.querySelector('.input__button');
const clue = document.querySelector('.input__clue');
const myRandomNumber = getRandomNumber(100);
let howManyTimes = 0;
const growingCounter = growCounter;
console.log(`Mi número aleatorio es ${myRandomNumber}`);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function growCounter(){
return howManyTimes++;
}

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

  counter.innerHTML = growingCounter();

}


button.addEventListener('click', playWithNumber);