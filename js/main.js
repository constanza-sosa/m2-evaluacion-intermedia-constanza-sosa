//me ha faltado el use strict y la indentacion. 
"use strict";

const counter = document.querySelector(".counter");
const input = document.querySelector(".input__text");
const button = document.querySelector(".input__button");
const clue = document.querySelector(".input__clue");
const myRandomNumber = getRandomNumber(100);
let howManyTimes = 0;
counter.innerHTML = howManyTimes;
// const growingCounter = growCounter; --> Esta no la he utilizado
console.log(`Mi número aleatorio es ${myRandomNumber}`);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function growCounter() {
  return howManyTimes++;
}
// esta la hubiera mejorado: 
// function showCounter(num){
//   counter.container.innerHTML = num;
// }

//Mejora: para no escribir siempre lo de clue.innerHTML: 
// function showClue(text){
//   clue.innerHTML = text;
// }

function playWithNumber(event) {
  let myInputNumber = parseInt(input.value);
  // console.log(`Mi número introducido es ${myInputNumber}`); sobra el console log

  if (myInputNumber === myRandomNumber) {
    //Acordarme de poner solo una comilla 
    clue.innerHTML = '¡HAS GANADO, CAMPEONA!';
  } else if (myInputNumber > myRandomNumber) {
    // si queremos que cuente cuando fallamos:
    // howManyTimes += 1;
    // counter.innerHTML = howManyTimes;
    clue.innerHTML = 'Demasiado alto';
  } else {
    // si queremos que cuente cuando fallamos:
    // howManyTimes += 1;
    // counter.innerHTML = howManyTimes;
    clue.innerHTML = 'Demasiado bajo';
  }
  
  counter.innerHTML = growingCounter();
  // si queremos que cuente siempre:
  // howManyTimes += 1;
  // counter.innerHTML = howManyTimes;
}

button.addEventListener("click", playWithNumber);
