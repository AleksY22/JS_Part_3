'use strict';

//const btns = document.querySelectorAll('button');
/*
//проверка наличия классов
console.log(btns[0].classList.length);
//получение класса
console.log(btns[0].classList.item(0));
//добавление класса
btns[0].classList.add('red');
//удаление класса
btns[0].classList.remove('blue');
//присваение(удаление) класса
btns[0].classList.toggle('blue');
//проверка наличия класса
if (btns[1].classList.contains('red')) {
   console.log('red');
}
*/
/*
btns[0].addEventListener('click', () => {
   btns[1].classList.toggle('red');
})
*/
/*
const wraper = document.querySelector('.btn-block');

wraper.addEventListener('click', (event) => {
   if (event.target && event.target.tagName == 'BUTTON') {
      console.log('red');
   }
});

const btn = document.createElement('button');
btn.classList.add('red');
wraper.append(btn);
*/

//==================setTimeout, setInterval======================
/*
const timerId = setTimeout(function (text) {
   console.log(text);
}, 2000, 'Hello');
*/
/*
const btn = document.querySelector('.btn');
let timerId;

btn.addEventListener('click', () => {
   timerId = setTimeout(logger, 2000);
});

clearTimeout(timerId);

function logger() {
   console.log('text')
}
*/
/*
function myAnimation() {
   const elem = document.querySelector('.box');
   let pos = 0;

   const id = setInterval(frame, 10);
   function frame() {
      if (pos == 300) {
         clearInterval(id);
      } else {
         pos++;
         elem.style.top = pos + 'px';
         elem.style.left = pos + 'px';
      }
   }
}

const btn = document.querySelector('.btn');
btn.addEventListener('click', myAnimation);
*/

