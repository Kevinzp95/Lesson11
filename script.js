const square = document.getElementById('square');
const inputText = document.getElementById('text');
const btn = document.getElementById('btn');

const elem = document.getElementById('e_btn');

const range = document.getElementById('range');
const circle = document.getElementById('circle');
let elemspan = document.getElementById('range-span');

elemspan.textContent = '50%';

const changeColor = function (event) {
      square.style.backgroundColor = inputText.value;
};

const rangeChanging = function (event) {
      circle.style.width = range.value + '%';
      circle.style.height = range.value + '%';
      elemspan.textContent = range.value + '%';
};

btn.addEventListener('click', changeColor);

elem.remove();

range.addEventListener('input', rangeChanging);


