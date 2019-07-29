const counter = document.querySelector('.counter');
const input = document.querySelector('.input__text');
const button = document.querySelector('.input__button');
const clue = document.querySelector('.input__clue');
const myRandomNumber = getRandomNumber(100);
console.log(`Mi número aleatorio es ${myRandomNumber}`);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function playWithNumber(event){
  let myInputNumber = parseInt(input.value);
  console.log(`Mi número introducido es ${myInputNumber}`);
  const howManyTimes = 0;

  if (myInputNumber === myRandomNumber){
    clue.innerHTML = '¡HAS GANADO, CAMPEONA!';
  }
  else if (myInputNumber > myRandomNumber){
    clue.innerHTML = 'Demasiado alto';
  } 
  else{
    clue.innerHTML = 'Demasiado bajo';
  }

  // for (let i = 0; i < 10; i++) {
  //   counter.innerHTML += howManyTimes;
  // }

  counter.innerHTML += howManyTimes;

}


button.addEventListener('click', playWithNumber);