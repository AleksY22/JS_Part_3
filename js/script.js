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
/*
//===========Работа с датами=========================
//учитывается часовой пояс
const now = new Date();
console.log(now);

console.log(now.getFullYear()); //2024
console.log(now.getMonth()); //2 отсчет начинается с 0
console.log(now.getDate()); //18 число
console.log(now.getDay()); //1

console.log(now.getTimezoneOffset()); //-180
console.log(now.getTime()); //1710787964741 секунды с начала отсчета (1970г)

console.log(now.setHours(18));


let start = new Date();
for (let i = 0; i < 100000; i++) {
   let some = i ** 3;
}

let end = new Date();

const rez = end - start;
console.log(rez);
*/
/*
//==================Функции-конструкторы==================
function User(name, id) {
   this.name = name;
   this.id = id;
   this.human = true;
   this.hello = function () {
      console.log(`Hello ${this.name}`);
   }
}

User.prototype.exit = function () {
   console.log(`User ${this.name} exit`);
}

const ivan = new User('Ivan', 28);
const aleks = new User('Aleks', 22);

console.log(ivan);
console.log(aleks);
aleks.hello();
ivan.exit();
*/
/*
//==================Контекст вызова this=================
// 1) Обычная функция:
//    при использовании 'use strict' - this = undefined
//    без использования 'use strict' - this = window

function showThis(a, b) {
   console.log(this); //undefined
   function sum() {
      console.log(this); //undefined
      return a + b; //замыкание
   }
   console.log(sum());
}

showThis(4, 5);

// 2) Метод объекта: this = объект

const obj = {
   a: 20,
   b: 15,
   sum: function () {
      console.log(this);
   }
};

obj.sum();

// 3) Функция-конструктор: this = экземпляр объекта (User)

function User(name, id) {
   this.name = name;
   this.id = id;
   this.human = true;
   this.hello = function () {
      console.log(`Hello ${this.name}`);
   }
}

let ivan = new User('Ivan', 23);

// 4) Ручное присвоение контекста (call, apply, bind): this = объект

function sayName(surname) {
   console.log(this);
   console.log(this.name + surname);
}

const user = {
   name: 'John'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num) {
   return this * num;
}

const double = count.bind(2); //this = 2
console.log(double(3));

// !!!! у стрелочных функций нет контекста вызова (берет у родителя)
*/
