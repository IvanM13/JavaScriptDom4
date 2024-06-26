"use strict"

// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

let input = document.querySelector('#from');
let span = document.querySelector('span');
input.addEventListener('input', (e) =>{
    span.innerHTML = e.target.value;
});

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

let msgBtn = document.querySelector('.messageBtn');
let msg = document.querySelector('.message');

msgBtn.addEventListener('click', () =>{
    msg.classList.add('animate_animated', 'animate_fadeInLeftBig');
    msg.style.visibility = 'visible';
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  const formInput = form.querySelectorAll(".form-control");
  let formTrue = true;

  formInput.forEach((inp) =>{
    if (inp.value.trim() === "") {
        inp.style.border = '2px solid red';
      formTrue = false;
    } else {
      inp.style.border = '';
    }
  });

  if (!formTrue) {
    e.preventDefault();
  }
});

formInput.forEach((inp) => {
  inp.addEventListener("input", function () {
    if (inp.value.trim() === "") {
    inp.style.border = '2px solid red';
    
    } else {
    inp.style.border = '';
    }
  });
});